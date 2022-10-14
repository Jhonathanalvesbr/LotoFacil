package com.bolao.bingo.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class JogoDTO {
    private Long id;
    private List<Integer> numeros;
}
