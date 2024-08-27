package com.Hospital_Management_System.doclogin.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.Hospital_Management_System.doclogin.entity.Appointment;
import com.Hospital_Management_System.doclogin.repository.AppointmentRepository;

import javax.management.AttributeNotFoundException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@CrossOrigin(origins = "http://localhost:4200/", originPatterns = "*")
@RequestMapping("/Api/v2")
public class AppointmentController {
	@Autowired
	private AppointmentRepository appointmentRepository;

	@PostMapping()
	public Appointment createAppointment(@RequestBody Appointment appointment) {
		return appointmentRepository.save(appointment);
	}

	@GetMapping
	public List<Appointment> getallAppointments() {
		return appointmentRepository.findAll();
	}

	@DeleteMapping("/appointments/{id}")
	public ResponseEntity<Map<String, Boolean>> deleteAppointment(@PathVariable long id) throws AttributeNotFoundException {

		Appointment appointment = appointmentRepository.findById(id).orElseThrow(()-> new AttributeNotFoundException("Appointment not found by Id" + id));

		appointmentRepository.delete(appointment);
		Map<String, Boolean> response = new HashMap<String, Boolean>();
		response.put("Deleted", Boolean.TRUE);

		return ResponseEntity.ok(response);


	}
}
