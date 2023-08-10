package com.example.tests.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class MusicDTO {
    private String title;
    private String category;
    private String description;
    private String link;
}
