import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../auth.service'; // Import AuthService
import { ApiResponse } from '../Models/api-response';

@Injectable({
  providedIn: 'root'
})

export class MyServiceService {

  constructor(private http: HttpClient, private authService: AuthService) { } // Inject AuthService

  getCurrentMonthExpenses(): Observable<any> {
    const token = this.authService.getToken(); // Use authService to get token
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    const today = new Date();
    const currentMonth = today.getMonth();
    const currentYear = today.getFullYear();

    return this.http.get<any>('http://localhost:5247/api/Expense/GetCurrentMonthExpenses', { headers });
  }

  getCurrentYearExpenses(): Observable<any> {
    const token = this.authService.getToken();
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    const currentYear = (new Date()).getFullYear();
    const apiUrl = `http://localhost:5247/api/Expense/GetCurrentYearExpenses`;

    return this.http.get<any>(apiUrl, { headers });
  }

  getTodaysExpenses(): Observable<any> {
    const token = this.authService.getToken();
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    const today = new Date();
    const apiUrl = `http://localhost:5247/api/Expense/GetTodaysExpenses`;

    return this.http.get<any>(apiUrl, { headers });
  }

  deleteExpense(expenseId: number): Observable<ApiResponse<any>> {
    const token = this.authService.getToken();
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });

    return this.http.delete<ApiResponse<any>>(`http://localhost:5247/api/Expense/DeleteExpenses/${expenseId}`, { headers });
  }

  updateExpense(expenseId: number, expenseData: any): Observable<ApiResponse<any>> {
    const token = this.authService.getToken();
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });

    return this.http.put<ApiResponse<any>>(`http://localhost:5247/api/Expense/UpdateExpenses/${expenseId}`, expenseData, { headers });
  }

  addExpense(expenseData: any): Observable<ApiResponse<any>> {
    const token = this.authService.getToken();
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });

    return this.http.post<ApiResponse<any>>('http://localhost:5247/api/Expense', expenseData, { headers });
  }

  getExpenses(): Observable<ApiResponse<any>> {
    const token = this.authService.getToken();
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });

    return this.http.get<ApiResponse<any>>('http://localhost:5247/api/Expense', { headers });
  }

// login services
isUserLoggedIn(): boolean{
  return !!localStorage.getItem('auth_token');
}

}


