package com.example.tests.service;

import com.example.tests.dto.MusicDTO;
import com.example.tests.entity.Music;
import com.example.tests.repo.MusicRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MusicService {

    @Autowired
    private MusicRepo musicRepo;

    public Music createMusic(MusicDTO musicDTO){
        Music music = new Music();
        music.setTitle(musicDTO.getTitle());
        music.setCategory(musicDTO.getCategory());
        music.setDescription(musicDTO.getDescription());
        music.setLink(musicDTO.getLink());

        return musicRepo.save(music);
    }

    public List<Music> getAllMusic(){
        return musicRepo.findAll();
    }

    public Music updateMusic(Integer musicId, MusicDTO musicDTO){
        Music existingMusic = musicRepo.findById(musicId).orElse(null);

        if(existingMusic != null){
            existingMusic.setTitle(musicDTO.getTitle());
            existingMusic.setCategory(musicDTO.getCategory());
            existingMusic.setDescription(musicDTO.getDescription());
            return musicRepo.save(existingMusic);
        }
        return null; //Music not found
    }

    public boolean deleteMusic(Integer musicId){
        Music existingMusic = musicRepo.findById(musicId).orElse(null);

        if(existingMusic != null){
            musicRepo.delete(existingMusic);
            return true; //Music Deleted
        }
        return false; //Product not deleted
    }
}
