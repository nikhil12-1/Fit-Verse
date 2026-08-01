import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Auth } from '../../services/auth';

@Component({
  selector: 'app-register',
  standalone: false,
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {
  constructor(private http: HttpClient) {}

  onSubmit(signupForm: any) {
    this.http.post("http://localhost:3000/user/register",signupForm.value).subscribe(res=>{
      console.log(res);}
    )
  }
}