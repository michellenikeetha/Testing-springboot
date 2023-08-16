package com.example.tests.repo;

import com.example.tests.entity.Appointment;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AppointmentRepo extends JpaRepository<Appointment, Integer> {
}
