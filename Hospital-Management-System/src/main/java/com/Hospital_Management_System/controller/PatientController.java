package com.Hospital_Management_System.controller;

import com.Hospital_Management_System.doclogin.entity.Appointment;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.Hospital_Management_System.entity.Patient;
import com.Hospital_Management_System.repository.PatientRepository;

import javax.management.AttributeNotFoundException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;


@RestController
@CrossOrigin(origins = "http://localhost:4200/",originPatterns = "*")
@RequestMapping("/api/v1")
public class PatientController {
	@Autowired
	private PatientRepository patientRepository;

	@PostMapping("/createPatients")
	public Patient createPatient(@RequestBody Patient patient) {
		return patientRepository.save(patient);

	}

	@GetMapping("/getAllPatients")
	public List<Patient> getAllPatients() {
		return patientRepository.findAll();
	}


	   @DeleteMapping("/patients/{id}")
	   public ResponseEntity<Map<String, Boolean>> deletePatient(@PathVariable long id) throws AttributeNotFoundException {

		Patient patient = patientRepository.findById(id).orElseThrow(() -> new AttributeNotFoundException("Appointment not found by Id" + id));
		patientRepository.delete(patient);
		Map<String, Boolean> response = new HashMap<String, Boolean>();
		response.put("Deleted", Boolean.TRUE);

		return ResponseEntity.ok(response);
	} 
 



    @GetMapping("/getPatient/{id}")
	public ResponseEntity<Patient>getPatientById(@PathVariable long id) throws AttributeNotFoundException {
		Patient patient = patientRepository.findById(id).orElseThrow(() -> new AttributeNotFoundException("patient Not Found with id: " + id));
	     return ResponseEntity.ok(patient);
	}



	@PutMapping("/updatePatient/{id}")
	public ResponseEntity<Patient> updatePatientBYId(@PathVariable long id, @RequestBody Patient patientDetails) throws AttributeNotFoundException {
		Patient patient = patientRepository.findById(id).orElseThrow(() -> new AttributeNotFoundException("Patient not found by Id: "+id));
		patient.setAge(patientDetails.getAge());
		patient.setName(patientDetails.getName());
		patient.setBlood_group(patientDetails.getBlood_group());
		patient.setDose(patientDetails.getDose());
		patient.setFees(patientDetails.getFees());
		patient.setPrescription(patientDetails.getPrescription());
		patient.setUrgency(patientDetails.getUrgency());


		Patient savedPatient = patientRepository.save(patient);
		return ResponseEntity.ok(savedPatient);

	}

}