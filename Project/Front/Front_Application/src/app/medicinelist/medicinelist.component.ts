import { Component } from '@angular/core';
import { MedicineService } from '../medicine.service';
import { Medicine } from '../medicine';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-medicinelist',
  templateUrl: './medicinelist.component.html',
  styleUrls: ['./medicinelist.component.css']
})
export class MedicinelistComponent {
  medicines:Medicine[]=[];

  constructor(private medicineService:MedicineService,private router:Router){
    
    }
    ngOnInit():void{
      this.getMedicine();
        
      
     }
  
  
  
    getMedicine(){
      this.medicineService.getMedicines().subscribe(data=>{
        this.medicines=data;
      })
    }

    update(id:number){
       this.router.navigate(['update-medicine',id]);

    }
  
    delete(id:number){

      this.medicineService.deleteMedicine(id).subscribe(data=>{
        console.log(data);
        this.getMedicine();

      })

    } 

   
    


}
