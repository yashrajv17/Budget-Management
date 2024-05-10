import { Component, OnInit } from '@angular/core';
import { MyServiceService } from 'src/app/Services/my-service.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  expenseObj: any = {
    "ID": 0,
    "Category": "",
    "Description": "",
    "Date": "2024-04-25T15:19:27.194Z",
    "Amount": 0,
    "userId":""
  };
  productList: any[] = [];
  
  constructor(private expenseService: MyServiceService,private router:Router  ) {

  }
  
  ngOnInit(){
    if(this.expenseService.isUserLoggedIn()) {
      // Your function
  
    }
    else {
       this.router.navigate(['/login']);
       alert('You are not Logged In !!')
    }
  }

  addExpense() {
    this.expenseService.addExpense(this.expenseObj).subscribe(
      (res) => {
        if (res.result) {
          Swal.fire("Success", "Expense Created Successfully", "success");
        } else {
          Swal.fire("Error", res.message, "error");
        }
      },
      (error) => {
        console.error('API Error:', error);
        Swal.fire("Error", "API Error", "error");
      }
    );
  }
}
