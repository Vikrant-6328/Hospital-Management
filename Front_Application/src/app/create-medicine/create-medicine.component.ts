import { Component } from '@angular/core';
import { Medicine } from '../medicine';
import { MedicineService } from '../medicine.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-medicine',
  templateUrl: './create-medicine.component.html',
  styleUrls: ['./create-medicine.component.css']
})
export class CreateMedicineComponent {
  medicine:Medicine = new Medicine();
 
  constructor(private medicineService:MedicineService,private router:Router){}

  saveMedicine(){
    this.medicineService.createMedicine(this.medicine).subscribe(data=>{
      console.log(data);
      this.gotoViewMedicine();
    })

  }
 
  onSubmit(){
    this.saveMedicine();

  }
  gotoViewMedicine(){
    this.router.navigate(['/medicinelist'])
  }

}
