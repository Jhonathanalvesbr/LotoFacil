package com.bolao.bingo.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;
@AllArgsConstructor
@NoArgsConstructor
@Data
public class LotoFacilDTO {
    private Boolean acumulado;
    private String dataApuracao;
    private String dataProximoConcurso;
    private List<String> dezenasSorteadasOrdemSorteio = null;
    private Boolean exibirDetalhamentoPorCidade;
    private Object id;
    private Integer indicadorConcursoEspecial;
    private List<String> listaDezenas = null;
    private Object listaDezenasSegundoSorteio;
    private List<ListaMunicipioUFGanhadoreDTO> listaMunicipioUFGanhadores = null;
    private List<ListaRateioPremioDTO> listaRateioPremio = null;
    private Object listaResultadoEquipeEsportiva;
    private String localSorteio;
    private String nomeMunicipioUFSorteio;
    private String nomeTimeCoracaoMesSorte;
    private Integer numero;
    private Integer numeroConcursoAnterior;
    private Integer numeroConcursoFinal05;
    private Integer numeroConcursoProximo;
    private Integer numeroJogo;
    private String observacao;
    private Object premiacaoContingencia;
    private String tipoJogo;
    private Integer tipoprivateacao;
    private Boolean ultimoConcurso;
    private Float valorArrecadado;
    private Float valorAcumuladoConcurso05;
    private Float valorAcumuladoConcursoEspecial;
    private Float valorAcumuladoProximoConcurso;
    private Float valorEstimadoProximoConcurso;
    private Float valorSaldoReservaGarantidora;
    private Float valorTotalPremioFaixaUm;
}
