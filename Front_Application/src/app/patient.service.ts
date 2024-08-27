import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Patient } from './patient';

@Injectable({
  providedIn: 'root' 
}) 
export class PatientService {

  constructor(private httpClient:HttpClient) { }

  private baseUrl="http://localhost:8080/api/v1"

    getPatientList():Observable<Patient[]>{
    return this.httpClient.get<Patient[]>(`${this.baseUrl}/getAllPatients`)
  }
    delete(id:number):Observable<object>{
    return this.httpClient.delete(`${this.baseUrl}/patients/${id}`);
} 

  createPatient(patient:Patient):Observable<object>{
  return this.httpClient.post<Patient>(`${this.baseUrl}/createPatients`,patient);
} 

  getPatientById(id:number):Observable<Patient>{
  return this.httpClient.get<Patient>(`${this.baseUrl}/getPatient/${id}`);

}

   updateThePatient(id:number,patient:Patient):Observable<Patient>{
   return this.httpClient.put<Patient>(`${this.baseUrl}/updatePatient/${id}`,patient);

}

} 


