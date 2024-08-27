import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Medicine } from './medicine';
import { Observable } from 'rxjs';
import { Patient } from './patient';

@Injectable({
  providedIn: 'root'
})
export class MedicineService {

  constructor(private httpClient:HttpClient) { }
  private baseUrl="http://localhost:8080/Api/v3"

  getMedicines():Observable<Medicine[]>{
   return this.httpClient.get<Medicine[]>(`${this.baseUrl}/getMedicines`) ;
  
  }  



  createMedicine(medicine:Medicine):Observable<Medicine>{

    return this.httpClient.post<Medicine>(`${this.baseUrl}/createMedicine`,medicine);
  
    
  }


  getMedicine(id:number):Observable<Medicine>{
    return this.httpClient.get<Medicine>(`${this.baseUrl}/getMedicine/${id}`);

}

  updateMedicine(id:number,medicine:Medicine):Observable<Medicine>{
   return this.httpClient.put<Medicine>(`${this.baseUrl}/updateMedicine/${id}`,medicine);
  }

  deleteMedicine(id:number):Observable<object>{
    return this.httpClient.delete(`${this.baseUrl}/deleteMedicine/${id}`);
  }
}  
