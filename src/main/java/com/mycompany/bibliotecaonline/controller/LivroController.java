package com.mycompany.bibliotecaonline.controller;

import com.mycompany.bibliotecaonline.model.Livro;
import com.mycompany.bibliotecaonline.repository.LivroRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;


import java.util.List;

@RestController
@RequestMapping("/livros")
public class LivroController {

    @Autowired
    private LivroRepository livroRepository;

    @GetMapping
    public List<Livro> listarLivros() {
        return livroRepository.findAll();
    }
    
    @GetMapping("/buscar")
    public List<Livro> buscarLivros(@RequestParam(name = "termo", required = false, defaultValue = "") String termo) {
        return livroRepository.findByTituloContainingIgnoreCaseOrAutorContainingIgnoreCase(termo, termo);
    }
    


    @PostMapping
    public Livro cadastrarLivro(@RequestBody Livro livro) {
        return livroRepository.save(livro);
    }
}
