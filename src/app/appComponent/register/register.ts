import { Component } from '@angular/core';
import { Auth } from '../../services/auth';

@Component({
  selector: 'app-register',
  standalone: false,
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {
  constructor(private auth: Auth) {}

  onSubmit(signupForm: any) {
    const { name, email, password } = signupForm.value;

    this.auth.register(name, email, password).subscribe({
      next: (response) => {
        console.log('Register success', response);
      },
      error: (err) => {
        console.error('Register failed', err);
      },
    });
  }
}
