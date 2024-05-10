import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MyServiceService } from 'src/app/Services/my-service.service';

@Component({
  selector: 'app-today-expenses',
  templateUrl: './today-expenses.component.html',
  styleUrls: ['./today-expenses.component.css']
})
export class TodayExpensesComponent implements OnInit {
  expenses: any[] = [];

  constructor(private myService: MyServiceService, private router: Router) { }

  ngOnInit(){
    if(this.myService.isUserLoggedIn()) {
      // Your function
      this.getTodaysExpenses();
    }
    else {
       this.router.navigate(['/login']);
       alert('You are not Logged In !!')
    }
  }

  getTodaysExpenses(): void {
    this.myService.getTodaysExpenses().subscribe(
      (response: any) => {
        console.log("API Response:", response); 
        if (Array.isArray(response)) {
          const today = new Date();
          this.expenses = response.filter(expense => {
            const expenseDate = new Date(expense.date);
            return expenseDate.getDate() === today.getDate() &&
                   expenseDate.getMonth() === today.getMonth() &&
                   expenseDate.getFullYear() === today.getFullYear();
          });
        } else if (response && typeof response === 'object') {
          if (Array.isArray(response.data)) {
            const today = new Date();
            this.expenses = response.data.filter((expense: { date: string | number | Date; }) => {
              const expenseDate = new Date(expense.date);
              return expenseDate.getDate() === today.getDate() &&
                     expenseDate.getMonth() === today.getMonth() &&
                     expenseDate.getFullYear() === today.getFullYear();
            });
          } else {
            console.error("Error: Expenses array not found in the response.");
            console.log("Response:", response); // Log the entire response object for further inspection
          }
        } else {
          console.error("Error: Unexpected response format.");
        }
      },
      (error: any) => {
        console.error("Error fetching expenses:", error);
      }
    );
  }
}
