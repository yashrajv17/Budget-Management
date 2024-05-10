import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  registers: any = {
    "userId":"",
    "fullName":"",
    "email": "",
    "password": "",
    "confirmPassword":"",
  };
  // email : string ="";
  // password: string="";
  constructor(private router:Router ,private http:HttpClient) { }

  ngOnInit(): void {
  }
  
  register(){
    this.http.post("http://localhost:5247/api/User/Registration",this.registers).subscribe((res:any)=>{
      if(res.result) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "You have successfully Registered with us !",
          showConfirmButton: false,
          timer: 1500
        });
        this.router.navigate(['/login']);
      } else {
        Swal.fire({
          title: 'Error!',
          text: 'You have Entered Invalid Details, Please check !',
          icon: 'error',
          confirmButtonText: 'Okay !'
        });
        console.log(res.message)
      }
    });
  }
}
