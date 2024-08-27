import { Component } from '@angular/core';
import { Appointment } from '../appointment';
import { AppointmentService } from '../appointment.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-create-appointment',
  templateUrl: './create-appointment.component.html',
  styleUrls: ['./create-appointment.component.css']
})
export class CreateAppointmentComponent {
  

  appointment:Appointment=new Appointment();

constructor(private appointmentService:AppointmentService,private router:Router){}

saveAppointment( ){
this.appointmentService.createAppointment(this.appointment).subscribe(data=>{
  console.log(data); 
  this.gotoAppointment();
})
}



  onSubmit(){
   this.saveAppointment();
   
  }
gotoAppointment(){
   this.router.navigate(['./appointmentlist']);
}
}
