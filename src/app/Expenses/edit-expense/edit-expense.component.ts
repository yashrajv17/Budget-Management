import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MyServiceService } from 'src/app/Services/my-service.service';

@Component({
  selector: 'app-edit-expense',
  templateUrl: './edit-expense.component.html',
  styleUrls: ['./edit-expense.component.css']
})
export class EditExpenseComponent {
  expenseObj: any = {
    "id": 0,
    "Category": "",
    "Description": "",
    "Date": "2024-04-25T15:19:27.194Z",
    "Amount": 0,
    "userId":""
  };
  productList: any[] = [];
  
  constructor(private expenseService:  MyServiceService, private router: Router) {}
  
  ngOnInit() {
    if(this.expenseService.isUserLoggedIn()) {
      // Your function
  
    }
    else {
       this.router.navigate(['/login']);
       alert('You are not Logged In !!')
    }
    
  }

  updateExpense() {
    this.expenseService.updateExpense(this.expenseObj.id, this.expenseObj).subscribe(
      (res) => {
        if (res.result) {
          alert("Expense updated Successfully");
        } else {
          alert(res.message);
        }
      },
      (error) => {
        console.error('API Error:', error);
        alert("API Error");
      }
    );
  }  
}
