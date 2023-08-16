package com.example.tests.controller;

import com.example.tests.dto.AppointmentDTO;
import com.example.tests.entity.Appointment;
import com.example.tests.service.AppointmentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@CrossOrigin
@RestController
@RequestMapping("/api/testing/appointment")
public class AppointmentController {

    @Autowired
    private AppointmentService appointmentService;

    @PostMapping
    public ResponseEntity<Appointment> createAppointment(@RequestBody AppointmentDTO appointmentDTO){
        Appointment createdAppointment = appointmentService.createAppointment(appointmentDTO);
        return ResponseEntity.status(HttpStatus.CREATED).body(createdAppointment);
    }

    @GetMapping("/all")
    public ResponseEntity<List<Appointment>> getAllAppointment(){
        List<Appointment> allAppointment = appointmentService.getAllAppointment();

        if(!allAppointment.isEmpty()){
            return ResponseEntity.ok(allAppointment);
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
