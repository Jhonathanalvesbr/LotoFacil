package com.bolao.bingo.repositorio;

import com.bolao.bingo.entidade.Concurso;
import org.springframework.data.jpa.repository.JpaRepository;


public interface ConcursoRepositorio  extends JpaRepository<Concurso, Integer> {

}
