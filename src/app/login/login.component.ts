import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(private router: Router, private fb: FormBuilder, private http: HttpClient, private authService: AuthService) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  get formControls() {
    return this.loginForm.controls;
  }

  login() {
    if (this.loginForm.invalid) {
      return;
    }
    this.http.post("http://localhost:5247/api/User/LoginPage", this.loginForm.value).subscribe((res: any) => {
      if (res.result) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "You have successfully logged In !",
          showConfirmButton: false,
          timer: 1500
        });
        this.authService.setLoggedIn(true, res.message);
        this.router.navigate(['/homepage']);
      } else {
        Swal.fire({
          title: 'Error!',
          text: 'You have Entered Invalid Details, Please check !',
          icon: 'error',
          confirmButtonText: 'Okay !'
        });
      }
    });
  }
}
