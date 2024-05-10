import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  constructor(private router: Router) {}

  isActive(route: string): boolean {
    return this.router.isActive(route, true);
  }

  swalfunlogout(){
    //to remove token when logout is hit
    localStorage.removeItem('auth_token');
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "You have successfully logged out !",
      showConfirmButton: false,
      timer: 1500
    });
  }

  swalfuntoday(){
    Swal.fire("Fetched Today's Expense !");
  }

  swalfunmonth(){
    Swal.fire("Fetched month's Expense !");
  }
  swalfunyear(){
    Swal.fire("Fetched all year Expenses !");
  }
}

