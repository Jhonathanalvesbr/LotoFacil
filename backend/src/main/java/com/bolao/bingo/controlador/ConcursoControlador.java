package com.bolao.bingo.controlador;

import com.bolao.bingo.dto.ConcursoDTO;
import com.bolao.bingo.servico.ConcursoServico;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.util.List;

@RestController
@RequestMapping("/api/v1/lotofacil")
public class ConcursoControlador {
    @Autowired
    ConcursoServico concursoServico;

    @GetMapping
    public List<ConcursoDTO> getConcursos() throws IOException {
        return concursoServico.getConcursos();
    }

    @GetMapping("/{id}")
    public ConcursoDTO getConcurso(@PathVariable Integer id){
        return concursoServico.getConcurso(id);
    }

    @PostMapping
    public ConcursoDTO setConcurso(@RequestBody ConcursoDTO concursoDTO) throws IOException {
        return concursoServico.setConcurso(concursoDTO);
    }
}
