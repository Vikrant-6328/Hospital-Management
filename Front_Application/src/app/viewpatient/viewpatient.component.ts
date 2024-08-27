import { Component } from '@angular/core';
import { PatientService } from '../patient.service';
import { ActivatedRoute } from '@angular/router';
import { Patient } from '../patient';

@Component({
  selector: 'app-viewpatient',
  templateUrl: './viewpatient.component.html',
  styleUrls: ['./viewpatient.component.css']
})
export class ViewpatientComponent {
  id:number=0;
  patient:Patient= new Patient(); // Patient Object
  constructor(private patientService:PatientService,private route:ActivatedRoute){}

ngOnInit():void{
     this.id=this.route.snapshot.params['id'];
     this.patientService.getPatientById(this.id).subscribe(data=>{
      console.log(data);

      this.patient=data;
     });
}
  


}
