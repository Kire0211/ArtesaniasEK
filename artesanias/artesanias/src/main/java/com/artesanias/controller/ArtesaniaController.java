package com.artesanias.controller;

import com.artesanias.model.Artesania;
import com.artesanias.service.ArtesaniaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/artesanias")
public class ArtesaniaController {
    @Autowired
    private ArtesaniaService artesaniaService;

    @GetMapping
    public List<Artesania> getAllArtesanias() {
        return artesaniaService.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Artesania> getArtesaniaById(@PathVariable Long id) {
        Optional<Artesania> artesania = artesaniaService.findById(id);
        return artesania.map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PostMapping
    public Artesania createArtesania(@RequestBody Artesania artesania) {
        return artesaniaService.save(artesania);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Artesania> updateArtesania(@PathVariable Long id, @RequestBody Artesania artesaniaDetails) {
        Optional<Artesania> optionalArtesania = artesaniaService.findById(id);
        if (optionalArtesania.isPresent()) {
            Artesania artesania = optionalArtesania.get();
            artesania.setTitulo(artesaniaDetails.getTitulo());
            artesania.setImagen(artesaniaDetails.getImagen());
            artesania.setDescripcion(artesaniaDetails.getDescripcion());
            artesania.setArtesano(artesaniaDetails.getArtesano());
            artesania.setValor(artesaniaDetails.getValor());
            return ResponseEntity.ok(artesaniaService.save(artesania));
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteArtesania(@PathVariable Long id) {
        artesaniaService.deleteById(id);
        return ResponseEntity.noContent().build();
    }
}