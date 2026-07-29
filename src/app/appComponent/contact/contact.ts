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
    this.http.post("https://fitverse-ys9s.onrender.com/",contactForm.value).subscribe(res=>{
      console.log(res);
    })
}
}
