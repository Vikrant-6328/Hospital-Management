package com.Hospital_Management_System.admin.entity;


import com.sun.tools.attach.AgentInitializationException;
import jakarta.persistence.*;
//import lombok.AllArgsConstructor;

@Entity
@Table(name="admin_login")
public class AdminLogin {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private String userid;
    private String password;

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getUserid() {
        return userid;
    }

    public void setUserid(String userid) {
        this.userid = userid;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public AdminLogin(long id, String userid, String password) {
        this.id = id;
        this.userid = userid;
        this.password = password;
    }

    public AdminLogin(){
        super();
    }

    @Override
    public String toString() {
        return "AdminLogin{" +
                "id=" + id +
                ", userid='" + userid + '\'' +
                ", password='" + password + '\'' +
                '}';
    }
}