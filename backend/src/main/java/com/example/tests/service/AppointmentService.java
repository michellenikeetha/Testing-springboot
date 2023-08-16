package com.example.tests.service;

import com.example.tests.dto.AppointmentDTO;
import com.example.tests.entity.Appointment;
import com.example.tests.repo.AppointmentRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AppointmentService {

    @Autowired
    private AppointmentRepo appointmentRepo;

    public Appointment createAppointment(@org.jetbrains.annotations.NotNull AppointmentDTO appointmentDTO){
        Appointment appointment = new Appointment();
        appointment.setTitle(appointmentDTO.getTitle());
        appointment.setStartTime(appointmentDTO.getStartTime());
        appointment.setEndTime(appointmentDTO.getEndTime());

        return appointmentRepo.save(appointment);
    }

    public List<Appointment> getAllAppointment() {
        return appointmentRepo.findAll();
    }
}
