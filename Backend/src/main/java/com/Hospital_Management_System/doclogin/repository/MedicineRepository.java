package com.Hospital_Management_System.doclogin.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.Hospital_Management_System.doclogin.entity.Medicine;
@Repository
public interface MedicineRepository extends JpaRepository<Medicine, Long>{


}
