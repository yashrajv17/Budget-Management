import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MyServiceService } from 'src/app/Services/my-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-current-month',
  templateUrl: './current-month.component.html',
  styleUrls: ['./current-month.component.css']
})
export class CurrentMonthComponent implements OnInit {
  expenses: any[] = [];
  currentMonthNumber: number | undefined;

  constructor(private myService: MyServiceService, private router: Router) { }

  ngOnInit() {
``
    if(this.myService.isUserLoggedIn()) {
      // Your function
      this.currentMonthNumber = (new Date()).getMonth() + 1;
    this.getCurrentMonthExpenses();
  
    }
    else {
       this.router.navigate(['/login']);
       Swal.fire('You are not Logged In !!');
    }
    
  }
  getCurrentMonthExpenses(): void {
    this.myService.getCurrentMonthExpenses().subscribe(
      (response: any) => {
        console.log("API Response:", response); 
        if (Array.isArray(response)) {
          const currentMonth = (new Date()).getMonth();
          const currentYear = (new Date()).getFullYear();
          this.expenses = response.filter(expense => {
            const expenseDate = new Date(expense.date);
            return expenseDate.getMonth() === currentMonth && expenseDate.getFullYear() === currentYear;
          });
        } else if (response && typeof response === 'object') {
          if (Array.isArray(response.data)) {
            const currentMonth = (new Date()).getMonth();
            const currentYear = (new Date()).getFullYear();
            this.expenses = response.data.filter((expense: { date: string | number | Date; }) => {
              const expenseDate = new Date(expense.date);
              return expenseDate.getMonth() === currentMonth && expenseDate.getFullYear() === currentYear;
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
