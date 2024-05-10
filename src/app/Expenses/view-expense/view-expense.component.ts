import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';
import { ApiResponse } from 'src/app/Models/api-response';
import { MyServiceService } from 'src/app/Services/my-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-expense',
  templateUrl: './view-expense.component.html',
  styleUrls: ['./view-expense.component.css']
})
export class ViewExpenseComponent implements OnInit {
  
  ExpenseList: any[] = [];

  constructor(private expenseService: MyServiceService) {}
  
  ngOnInit(): void {

  }

  buttonCall(){
    Swal.fire("Fetched all the Expenses !");
  }
  
  expenseList() {
    this.expenseService.getExpenses().subscribe(
      (response) => {
        this.ExpenseList = response.data;
      },
      (error) => {
        console.error('Error fetching expenses:', error);
      }
    );
  }
  

}
