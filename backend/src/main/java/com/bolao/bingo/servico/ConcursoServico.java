package com.bolao.bingo.servico;

import com.bolao.bingo.dto.ConcursoDTO;
import com.bolao.bingo.dto.LotoFacilDTO;
import com.bolao.bingo.entidade.Concurso;
import com.bolao.bingo.mapper.ConcursoMapper;
import com.bolao.bingo.repositorio.ConcursoRepositorio;
import com.google.gson.Gson;
import okhttp3.OkHttpClient;
import okhttp3.Request;
import okhttp3.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.net.ssl.*;
import java.io.IOException;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class ConcursoServico {
    @Autowired
    ConcursoMapper concursoMapper = ConcursoMapper.INSTANCE;
    @Autowired
    ConcursoRepositorio concursoRepositorio;

    OkHttpClient getUnsafeOkHttpClient() {
        try {
            // Create a trust manager that does not validate certificate chains
            final TrustManager[] trustAllCerts = new TrustManager[]{new X509TrustManager() {
                @Override
                public void checkClientTrusted(java.security.cert.X509Certificate[] chain, String authType) {
                }

                @Override
                public void checkServerTrusted(java.security.cert.X509Certificate[] chain, String authType) {
                }

                @Override
                public java.security.cert.X509Certificate[] getAcceptedIssuers() {
                    return new java.security.cert.X509Certificate[]{};
                }
            }};

            // Install the all-trusting trust manager
            final SSLContext sslContext = SSLContext.getInstance("SSL");
            sslContext.init(null, trustAllCerts, new java.security.SecureRandom());
            // Create an ssl socket factory with our all-trusting manager
            final SSLSocketFactory sslSocketFactory = sslContext.getSocketFactory();

            OkHttpClient.Builder builder = new OkHttpClient.Builder();
            builder.sslSocketFactory(sslSocketFactory, (X509TrustManager) trustAllCerts[0]);
            builder.hostnameVerifier(new HostnameVerifier() {
                @Override
                public boolean verify(String hostname, SSLSession session) {
                    return true;
                }
            });

            OkHttpClient okHttpClient = builder.build();
            return okHttpClient;
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }

    public ConcursoDTO setConcurso(ConcursoDTO concursoDTO) throws IOException {
        Concurso concurso = concursoMapper.toConcurso(concursoDTO);
        Optional<Concurso> con = concursoRepositorio.findById(concurso.getConcurso());
        if (con.isPresent()) {
            con.get().getJogos().add(concurso.getJogos().get(0));
            concurso = con.get();
        }
        if (concurso.getResultado() == null || concurso.getResultado().size() == 0) {
            OkHttpClient client = getUnsafeOkHttpClient();
            Request request = new Request.Builder().url("https://servicebus2.caixa.gov.br/portaldeloterias/api/lotofacil/").build(); // defaults to GET
            Response response = client.newCall(request).execute();
            Gson gson = new Gson();
            LotoFacilDTO lotoFacilDTO = gson.fromJson(response.body().string(), LotoFacilDTO.class);
            if(concurso.getConcurso() == lotoFacilDTO.getNumero()){
                concurso.setResultado(lotoFacilDTO.getDezenasSorteadasOrdemSorteio().stream().map(n -> Integer.parseInt(n)).sorted((o1, o2) -> o1 - o2).collect(Collectors.toList()));
            }
        }


        concurso = concursoRepositorio.save(concurso);
        return concursoMapper.toDTO(concurso);
    }

    public List<ConcursoDTO> getConcursos() throws IOException {
        List<Concurso> concursos =  concursoRepositorio.findAll();
        for (Concurso concurso:concursos) {
            if (concurso.getResultado() == null || concurso.getResultado().size() == 0) {
                OkHttpClient client = getUnsafeOkHttpClient();
                Request request = new Request.Builder().url("https://servicebus2.caixa.gov.br/portaldeloterias/api/lotofacil/").build(); // defaults to GET
                Response response = client.newCall(request).execute();
                Gson gson = new Gson();
                LotoFacilDTO lotoFacilDTO = gson.fromJson(response.body().string(), LotoFacilDTO.class);
                if(concurso.getConcurso() == lotoFacilDTO.getNumero()){
                    concurso.setResultado(lotoFacilDTO.getDezenasSorteadasOrdemSorteio().stream().map(n -> Integer.parseInt(n)).sorted((o1, o2) -> o1 - o2).collect(Collectors.toList()));
                    concurso = concursoRepositorio.save(concurso);
                }
            }
        }
        return concursos.stream().map(concurso -> concursoMapper.toDTO(concurso)).collect(Collectors.toList());
    }

    public ConcursoDTO getConcurso(Integer id) {
        return concursoMapper.toDTO(concursoRepositorio.findById(id).get());
    }
}
