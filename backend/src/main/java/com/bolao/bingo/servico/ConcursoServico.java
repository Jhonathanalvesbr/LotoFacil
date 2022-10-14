package com.bolao.bingo.servico;

import com.bolao.bingo.controlador.ConcursoControlador;
import com.bolao.bingo.dto.ConcursoDTO;
import com.bolao.bingo.entidade.Concurso;
import com.bolao.bingo.mapper.ConcursoMapper;
import com.bolao.bingo.repositorio.ConcursoRepositorio;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class ConcursoServico {
    @Autowired
    ConcursoMapper concursoMapper = ConcursoMapper.INSTANCE;
    @Autowired
    ConcursoRepositorio concursoRepositorio;

    public ConcursoDTO setConcurso(ConcursoDTO concursoDTO){
        Concurso concurso = concursoMapper.toConcurso(concursoDTO);
        Optional<Concurso> con = concursoRepositorio.findById(concurso.getConcurso());
        if(con.isPresent()){
            con.get().getJogos().add(concurso.getJogos().get(0));
            concurso = con.get();
        }
        concurso = concursoRepositorio.save(concurso);
        return concursoMapper.toDTO(concurso);
    }

    public List<ConcursoDTO> getConcursos() {
        return concursoRepositorio.findAll().stream().map(concurso -> concursoMapper.toDTO(concurso)).collect(Collectors.toList());
    }

    public ConcursoDTO getConcurso(Integer id) {
        return concursoMapper.toDTO(concursoRepositorio.findById(id).get());
    }
}
