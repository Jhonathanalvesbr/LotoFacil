package com.bolao.bingo.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ListaMunicipioUFGanhadoreDTO {
    private Integer ganhadores;
    private String municipio;
    private String nomeFatansiaUL;
    private Integer posicao;
    private String serie;
    private String uf;
}
