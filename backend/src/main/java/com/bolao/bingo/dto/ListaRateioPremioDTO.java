package com.bolao.bingo.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ListaRateioPremioDTO {
    private String descricaoFaixa;
    private Integer faixa;
    private Integer numeroDeGanhadores;
    private Float valorPremio;
}
