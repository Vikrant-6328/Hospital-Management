package com.Hospital_Management_System.admin.repository;

import com.Hospital_Management_System.admin.entity.AdminLogin;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AdminRepository extends JpaRepository<AdminLogin,String> {

}
