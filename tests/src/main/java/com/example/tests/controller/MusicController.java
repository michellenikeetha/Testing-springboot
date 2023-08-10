package com.example.tests.controller;

import com.example.tests.dto.MusicDTO;
import com.example.tests.entity.Music;
import com.example.tests.service.MusicService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/testing/music")
public class MusicController {

    @Autowired
    private MusicService musicService;

    @PostMapping
    public ResponseEntity<Music> createMusic(@RequestBody MusicDTO musicDTO){
        Music createdMusic = musicService.createMusic(musicDTO);
        return ResponseEntity.status(HttpStatus.CREATED).body(createdMusic);
    }

    @GetMapping("/all")
    public ResponseEntity<List<Music>> getAllMusic(){
        List<Music> allMusic = musicService.getAllMusic();

        if(!allMusic.isEmpty()){
            return ResponseEntity.ok(allMusic);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @PutMapping("/{musicId}")
    public ResponseEntity<Music> updateMusic(
            @PathVariable Integer musicId,
            @RequestBody MusicDTO musicDTO){
        Music updatedMusic = musicService.updateMusic(musicId, musicDTO);

        if(updatedMusic != null){
            return ResponseEntity.ok(updatedMusic);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/{musicId}")
    public ResponseEntity<Void> deleteMusic(@PathVariable Integer musicId){
        boolean isDeleted = musicService.deleteMusic(musicId);

        if(isDeleted){
            return ResponseEntity.noContent().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }

}
