import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-doctor-login',
  templateUrl: './doctor-login.component.html',
  styleUrls: ['./doctor-login.component.css']
})
export class DoctorLoginComponent {
  username:string="";
  password:string="";
   
  inValidLogin=false;

constructor(private router:Router ){}

  checkLogin(){
    if(this.username=="Vikrant" && this.password=="Welcome@2021"){
      sessionStorage.setItem('username',this.username)  ;
      
      this.router.navigate(['docdash']);
      return true;
    }
    else{
      alert("Wrong Credintials")
      this.router.navigate(['home']);
      return false;
    } 

  }
}


