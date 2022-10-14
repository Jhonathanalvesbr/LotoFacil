package com.bolao.bingo.entidade;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.List;


@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class Concurso {
    @Id
    private int concurso;
    @OneToMany(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    private List<Jogo> jogos;
}
