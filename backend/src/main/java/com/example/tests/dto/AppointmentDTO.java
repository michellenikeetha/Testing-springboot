package com.example.tests.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;
@AllArgsConstructor
@NoArgsConstructor
@Data
public class AppointmentDTO {
    private String title;
    private LocalDateTime startTime;
    private LocalDateTime endTime;
}
