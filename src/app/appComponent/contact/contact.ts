import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  standalone: false,
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {

  constructor (private http : HttpClient) {}
  onSubmit(contactForm:any){
    this.http.post("http://localhost:3000/contact",contactForm.value).subscribe(res=>{
      console.log(res);
    })
}
}
