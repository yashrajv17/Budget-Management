import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeleteExpenseComponent } from './Expenses/delete-expense/delete-expense.component';
import { EditExpenseComponent } from './Expenses/edit-expense/edit-expense.component';
import { HomepageComponent } from './Expenses/homepage/homepage.component';
import { TodayExpensesComponent } from './Expenses/today-expenses/today-expenses.component';
import { ViewExpenseComponent } from './Expenses/view-expense/view-expense.component';
import { LoginComponent } from './login/login.component';
import { LoginNextComponent } from './Expenses/login-next/login-next.component';
import { RegisterComponent } from './register/register.component'
import { CurrentMonthComponent } from './Expenses/current-month/current-month.component';
import { CurrentYearComponent } from './Expenses/current-year/current-year.component';

const routes: Routes = [
  {
    path:'',
    component:LoginNextComponent
  },
  {
    path:'delete-expense',
    component:DeleteExpenseComponent
  },
  {
    path:'edit-expense',
    component:EditExpenseComponent
  },
  {
    path:'homepage',
    component:HomepageComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'register',
    component:RegisterComponent
  },
  {
    path: 'view-expense',
    component:ViewExpenseComponent
  },
  {
    path: 'today-expenses',
    component:TodayExpensesComponent
  },
  {
    path: 'current-month',
    component: CurrentMonthComponent
  },
  {
     path: 'current-year',
     component: CurrentYearComponent
  }

  // Add other routes here
  // Redirect to login by default
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

