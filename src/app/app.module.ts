import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import {HttpClientModule} from '@angular/common/http';
import { ViewExpenseComponent } from './Expenses/view-expense/view-expense.component';
import { DeleteExpenseComponent } from '../app/Expenses/delete-expense/delete-expense.component';
import { EditExpenseComponent } from './Expenses/edit-expense/edit-expense.component';
import { HomepageComponent } from './Expenses/homepage/homepage.component';
import { TodayExpensesComponent } from './Expenses/today-expenses/today-expenses.component';
import { LoginNextComponent } from './Expenses/login-next/login-next.component';
import { RegisterComponent } from './register/register.component';
import { CurrentMonthComponent } from './Expenses/current-month/current-month.component';
import { CurrentYearComponent } from './Expenses/current-year/current-year.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ViewExpenseComponent,
    DeleteExpenseComponent,
    EditExpenseComponent,
    HomepageComponent,
    TodayExpensesComponent,
    LoginNextComponent,
    RegisterComponent,
    CurrentMonthComponent,
    CurrentYearComponent,
    NavbarComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
