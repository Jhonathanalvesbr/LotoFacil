package com.bolao.bingo.mapper;

import com.bolao.bingo.dto.ConcursoDTO;
import com.bolao.bingo.entidade.Concurso;
import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;

@Mapper(componentModel = "spring")
public interface ConcursoMapper {
    ConcursoMapper INSTANCE = Mappers.getMapper(ConcursoMapper.class);

    ConcursoDTO toDTO(Concurso concurso);
    Concurso toConcurso(ConcursoDTO concursoDTO);
}
