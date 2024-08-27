package com.Hospital_Management_System.admin.controller;

import com.Hospital_Management_System.admin.entity.*;
import com.Hospital_Management_System.admin.repository.AdminRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.kafka.KafkaProperties;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/adminlogin")
@CrossOrigin(origins = "http://localhost:4200/",originPatterns = "*")
public class AdminLoginController {
	
    @Autowired
    private AdminRepository adminRepository;
    @GetMapping("/getAdmin")
    public List<AdminLogin> getAllAdmins() {
        return adminRepository.findAll();
    }
     @PostMapping("/createLogin")
    public AdminLogin createAdmin(@RequestBody AdminLogin adminlogin){
          return adminRepository.save(adminlogin);

    }

}

