import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Adminlogin } from './adminlogin';

@Injectable({
  providedIn: 'root'
})
export class AdminloginService {

  private baseUrl="http://localhost:8080/api/adminlogin"

  constructor(private httpClient:HttpClient) { }

  adminLogin(adminloginn:Adminlogin):Observable<object>{
    console.log(adminloginn);
    return this.httpClient.post(`${this.baseUrl}/createLogin`,adminloginn);


  }
}
