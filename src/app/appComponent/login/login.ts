import { Component } from '@angular/core';
import { Auth } from '../../services/auth';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  onSubmit(loginForm: any) {
    console.log(loginForm.value);
}
}