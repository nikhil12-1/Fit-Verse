import { Component } from '@angular/core';
import { Auth } from '../../services/auth';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  constructor(private auth: Auth) {}

  onSubmit(loginForm: any) {
    const { email, password } = loginForm.value;

    this.auth.login(email, password).subscribe({
      next: (response: any) => {
        if (response?.token) {
          localStorage.setItem('token', response.token);
        }
        console.log('Login success', response);
      },
      error: (err) => {
        console.error('Login failed', err);
      },
    });
  }
}