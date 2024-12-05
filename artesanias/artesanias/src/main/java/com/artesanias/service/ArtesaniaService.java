package com.artesanias.service;

import com.artesanias.model.Artesania;
import com.artesanias.repository.ArtesaniaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ArtesaniaService {
    @Autowired
    private ArtesaniaRepository artesaniaRepository;

    public List<Artesania> findAll() {
        return artesaniaRepository.findAll();
    }

    public Optional<Artesania> findById(Long id) {
        return artesaniaRepository.findById(id);
    }

    public Artesania save(Artesania artesania) {
        return artesaniaRepository.save(artesania);
    }

    public void deleteById(Long id) {
        artesaniaRepository.deleteById(id);
    }
}