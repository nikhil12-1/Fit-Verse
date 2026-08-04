import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  standalone: false,
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
  isLoading = false;
  statusMessage: string | null = null;
  statusType: 'success' | 'error' | null = null;

  constructor(private http: HttpClient) {}

  onSubmit(contactForm: any) {
    this.isLoading = true;
    this.statusMessage = null;
    this.statusType = null;

    this.http.post('http://localhost:3000/contact/', contactForm.value).subscribe({
      next: (res: any) => {
        this.isLoading = false;
        this.statusType = 'success';
        this.statusMessage = res?.message || 'Your message was sent successfully.';
        contactForm.resetForm();
      },
      error: (err) => {
        this.isLoading = false;
        this.statusType = 'error';
        this.statusMessage = err?.error?.message || 'Something went wrong. Please try again.';
      },
    });
  }
}
