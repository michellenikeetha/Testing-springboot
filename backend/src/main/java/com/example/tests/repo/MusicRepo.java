package com.example.tests.repo;

import com.example.tests.entity.Music;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MusicRepo extends JpaRepository<Music, Integer> {
}
