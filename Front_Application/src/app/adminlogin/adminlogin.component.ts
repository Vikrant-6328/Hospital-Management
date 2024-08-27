import { Component } from '@angular/core';
import { Adminlogin } from '../adminlogin';
import { AdminloginService } from '../adminlogin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css'] 
})
export class AdminloginComponent {

  adminlogin:Adminlogin= new Adminlogin();

  constructor(private adminloginService:AdminloginService,private router:Router){}



ngOnInit():void{
  

}

  checkLogin(){ 
    console.log(this.adminlogin);
    this.adminloginService.adminLogin(this.adminlogin).subscribe(data=>{
      console.log("Login Sucessfully");
      this.gotoAdminpage();

    })
   }

   gotoAdminpage(){
    this.router.navigate(['admin'])
   }
}
