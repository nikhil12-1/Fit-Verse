import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class Auth {
  private readonly baseUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/user/login`, { email, password }).pipe(
      tap((res) => {
        if (res?.token) {
          localStorage.setItem('token', res.token);
        }
      }),
    );
  }

  logout(): void {
    localStorage.removeItem('token');
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem('token');
  }

  register(name: string, email: string, password: string, confirmPassword?: string): Observable<any> {
    const payload: any = { name, email, password };
    if (confirmPassword !== undefined) {
      payload.confirmPassword = confirmPassword;
    }
    return this.http.post(`${this.baseUrl}/user/register`, payload);
  }
}
