package com.Hospital_Management_System.doclogin.controller;

import com.Hospital_Management_System.doclogin.entity.Medicine;
import com.Hospital_Management_System.doclogin.repository.MedicineRepository;
import com.Hospital_Management_System.entity.Patient;
import com.Hospital_Management_System.repository.PatientRepository;
import jakarta.persistence.Id;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.management.AttributeNotFoundException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;


@RestController
@CrossOrigin(origins = "http://localhost:4200/", originPatterns = "*")
@RequestMapping("/Api/v3")
public class MedicineController {
	@Autowired
	private MedicineRepository MedicineRepository;

	@PostMapping("/createMedicine")
	public Medicine createAppointment(@RequestBody Medicine Medicine) {
		return MedicineRepository.save(Medicine);
	}

	@GetMapping("/getMedicines")
	public List<Medicine> getAlMedicines() {
		return MedicineRepository.findAll();
	}

	@GetMapping("/getMedicine/{id}")
	public ResponseEntity<Medicine> getPatientById(@PathVariable long id) throws AttributeNotFoundException {
		Medicine medicine = MedicineRepository.findById(id).orElseThrow(() -> new AttributeNotFoundException("patient Not Found with id: " + id));
		return ResponseEntity.ok(medicine);
	}

	@PutMapping("/updateMedicine/{id}")
	public ResponseEntity<Medicine> updateMedicineById(@PathVariable long id, @RequestBody Medicine medicinedetails) throws AttributeNotFoundException {
		Medicine medicine = MedicineRepository.findById(id).orElseThrow(() -> new AttributeNotFoundException("Medicine not found by Id: " + id));

		medicine.setDrugname(medicinedetails.getDrugname());
		medicine.setStock(medicinedetails.getStock());

		Medicine savedMedcine = MedicineRepository.save(medicine);
		return ResponseEntity.ok(savedMedcine);
	}

	@DeleteMapping("/deleteMedicine/{id}")
	public ResponseEntity<Map<String,Boolean> >deleteMedicine(@PathVariable long id) throws AttributeNotFoundException {
		Medicine medicine = MedicineRepository.findById(id).orElseThrow(() -> new AttributeNotFoundException("Medicine not found" + id));
		MedicineRepository.delete(medicine);

		Map<String, Boolean> response = new HashMap<String, Boolean>();
		response.put("Deleted", Boolean.TRUE);

		return ResponseEntity.ok(response);
	}

}
