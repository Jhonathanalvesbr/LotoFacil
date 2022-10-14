package com.bolao.bingo.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.beans.factory.annotation.Value;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ConcursoDTO {
    private int concurso;
    private List<JogoDTO> jogos;
}
