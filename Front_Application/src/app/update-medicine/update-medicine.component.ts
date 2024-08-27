import { Component } from '@angular/core';
import { MedicineService } from '../medicine.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Medicine } from '../medicine';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-update-medicine',
  templateUrl: './update-medicine.component.html',
  styleUrls: ['./update-medicine.component.css']
})
export class UpdateMedicineComponent {
id:number=0;
medicine:Medicine= new Medicine();

  constructor(private route:ActivatedRoute,private medicineService:MedicineService,private router:Router){}
  

  ngOnInit():void{
    this.id = this.route.snapshot.params['id'];
    this.medicineService.getMedicine(this.id).subscribe(data=>{
    
          this.medicine=data;
 
        })
      } 
 



  onSubmit(){

  this.medicineService.updateMedicine(this.id,this.medicine).subscribe(data=>{
    console.log(data);
    this.goToDash();
  })

}

goToDash(){
  this.router.navigate(['medicinelist'])
}

}
