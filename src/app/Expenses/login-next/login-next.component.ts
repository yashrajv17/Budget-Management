import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login-next',
  templateUrl: './login-next.component.html',
  styleUrls: ['./login-next.component.css']
})
export class LoginNextComponent implements OnInit {
 


 constructor(private router:Router,private http:HttpClient) { }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  onaddExpense(){
    Swal.fire("Please Log In to Add Expense !");
  }
  oneditExpense(){
    Swal.fire("Please Log In to Edit Expense !");
  }
  ondeleteExpense(){
    Swal.fire("Please Log In to Delete Expenses");
  }

   // const storedToken=localStorage.getItem('token');
   // const headers=new HttpHeaders().set('Authorization','Bearer ${storedToken}');
   
 }
 




