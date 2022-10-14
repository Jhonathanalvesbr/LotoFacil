package com.bolao.bingo.entidade;

import com.bolao.bingo.dto.ConcursoDTO;
import com.bolao.bingo.mapper.ConcursoMapper;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.ToString;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.ArrayList;
import java.util.List;

@SpringBootTest
public class TesteEntidade {

        @Test
        void testeConversaoParaDTO() {

            ConcursoMapper concursoMapper = ConcursoMapper.INSTANCE;

            List<Integer> numero = new ArrayList<>();
            numero.add(1);
            numero.add(2);
            numero.add(3);


            Jogo jogo = new Jogo(1L, 1,numero);
            List<Jogo> jogos = new ArrayList<>();
            jogos.add(jogo);
            Concurso concurso = new Concurso( 3036,1, jogos);
            ConcursoDTO concursoDTO = concursoMapper.toDTO(concurso);


            Assertions.assertEquals(concurso.getJogos().get(0).getNumeros().toString(), concursoDTO.getJogos().get(0).getNumeros().toString());
        }


}
