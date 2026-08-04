import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Auth } from '../../services/auth';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  isLoading = false;
  errorMessage: string | null = null;

  constructor(private auth: Auth, private router: Router) {}

  onSubmit(loginForm: any) {
    if (loginForm.invalid) {
      this.errorMessage = 'Please enter your email and password.';
      return;
    }

    this.isLoading = true;
    this.errorMessage = null;

    const { email, password } = loginForm.value;

    this.auth.login(email, password).subscribe({
      next: (res: any) => {
        this.isLoading = false;
        loginForm.resetForm();

        if (res?.token) {
          this.router.navigate(['/user/dashboard']);
        } else {
          this.errorMessage = res?.message || 'Login failed. Please try again.';
        }
      },
      error: (err) => {
        this.isLoading = false;
        this.errorMessage = err?.error?.message || 'Invalid email or password.';
      },
    });99
  }
}