import { Component } from '@angular/core';
import { Patient } from '../patient';
import { PatientService } from '../patient.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-docdash',
  templateUrl: './docdash.component.html',
  styleUrls: ['./docdash.component.css']
})
export class DocdashComponent {

  patients:Patient[]=[];


constructor(private patientService:PatientService,private router:Router){}

ngOnInit():void{
  this.getPatients();  
 }


getPatients(){
  this.patientService.getPatientList().subscribe(data=>{
    this.patients=data;
  });
}

update(id:number){
this.router.navigate(['update-patient',id])
}
  
 
deletePatient(id:number){
  this.patientService.delete(id).subscribe(data=>{
    console.log(data);
    this.getPatients();
    

  })
}

view(id:number){
   this.router.navigate(['viewpatient',id])
}

}
