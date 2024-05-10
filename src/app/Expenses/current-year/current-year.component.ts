import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MyServiceService } from 'src/app/Services/my-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-current-year',
  templateUrl: './current-year.component.html',
  styleUrls: ['./current-year.component.css']
})
export class CurrentYearComponent implements OnInit {
  expenses: any[] = [];
  currentYear!: number;

  constructor(private myService: MyServiceService, private router: Router) { }

  ngOnInit(){

    if(this.myService.isUserLoggedIn()) {
      // Your function
      this.currentYear = (new Date()).getFullYear();
      this.getCurrentYearExpenses();
  
    }
    else {
       this.router.navigate(['/login']);
       Swal.fire('You are not Logged In !!');
    }


    
  }

  getCurrentYearExpenses(): void {
    this.myService.getCurrentYearExpenses().subscribe(
      (response: any) => {
        console.log("API Response:", response); 
        if (Array.isArray(response)) {
          this.expenses = response.filter(expense => {
            const expenseDate = new Date(expense.date);
            return expenseDate.getFullYear() === this.currentYear;
          });
        } else if (response && typeof response === 'object') {
          if (Array.isArray(response.data)) {
            this.expenses = response.data.filter((expense: { date: string | number | Date; }) => {
              const expenseDate = new Date(expense.date);
              return expenseDate.getFullYear() === this.currentYear;
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
