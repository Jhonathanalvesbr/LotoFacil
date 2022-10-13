export type UltimoSorteio = {
  acumulado: boolean
  dataApuracao: string
  dataProximoConcurso: string
  dezenasSorteadasOrdemSorteio: string[]
  exibirDetalhamentoPorCidade: boolean
  id: any
  indicadorConcursoEspecial: number
  listaDezenas: string[]
  listaDezenasSegundoSorteio: any
  listaMunicipioUFGanhadores: ListaMunicipioUfganhadore[]
  listaRateioPremio: ListaRateioPremio[]
  listaResultadoEquipeEsportiva: any
  localSorteio: string
  nomeMunicipioUFSorteio: string
  nomeTimeCoracaoMesSorte: string
  numero: number
  numeroConcursoAnterior: number
  numeroConcursoFinal_0_5: number
  numeroConcursoProximo: number
  numeroJogo: number
  observacao: string
  premiacaoContingencia: any
  tipoJogo: string
  tipoPublicacao: number
  ultimoConcurso: boolean
  valorArrecadado: number
  valorAcumuladoConcurso_0_5: number
  valorAcumuladoConcursoEspecial: number
  valorAcumuladoProximoConcurso: number
  valorEstimadoProximoConcurso: number
  valorSaldoReservaGarantidora: number
  valorTotalPremioFaixaUm: number
}

export type ListaRateioPremio = {
  descricaoFaixa: string
  faixa: number
  numeroDeGanhadores: number
  valorPremio: number
}




export type ListaMunicipioUfganhadore = {
  ganhadores: number
  municipio: string
  nomeFatansiaUL: string
  posicao: number
  serie: string
  uf: string
}
