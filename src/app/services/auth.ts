import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class Auth {
  private readonly baseUrl = 'https://fitverse-ys9s.onrender.com/';

  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<any> {
    return this.http.post(`${this.baseUrl}/user/login`, { email, password });
  }

  logout(): void {
    localStorage.removeItem('token');
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem('token');
  }

  register(name: string, email: string, password: string): Observable<any> {
    return this.http.post(`${this.baseUrl}/user/register`, { name, email, password });
  }
}
