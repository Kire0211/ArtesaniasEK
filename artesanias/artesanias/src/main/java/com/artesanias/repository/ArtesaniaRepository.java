package com.artesanias.repository;

import com.artesanias.model.Artesania;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ArtesaniaRepository extends JpaRepository<Artesania, Long> {
}