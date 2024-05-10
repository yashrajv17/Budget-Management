import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MyServiceService } from 'src/app/Services/my-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-delete-expense',
  templateUrl: './delete-expense.component.html',
  styleUrls: ['./delete-expense.component.css']
})
export class DeleteExpenseComponent {

  expenseObj: any = {
    "id": 0
  };
  productList: any[] = [];

  constructor(private expenseService: MyServiceService, private router: Router) {}

  ngOnInit() {
    if(this.expenseService.isUserLoggedIn()) {
      // Your function
    }
    else {
       this.router.navigate(['/login']);
       Swal.fire('You are not Logged In !!');
    }
  }

  deleteExpense() {
    this.expenseService.deleteExpense(this.expenseObj.id).subscribe(
      (resultData: any) => {
        if(resultData == "Expense successfully deleted"){
          alert("Successfully Deleted");
        }
        else{
          Swal.fire('Delete Successfully !!');
        }
      },
      (error) => {
        console.error('API Error:', error);
        if (error.status === 401) {
          Swal.fire("Unauthorized: Please check your token");
        } else {
          Swal.fire('API Error !');
        }
      }
    );
  }
}
