import { Component } from '@angular/core';
import { Auth } from '../../services/auth';

@Component({
  selector: 'app-user-sidebar',
  standalone: false,
  templateUrl: './user-sidebar.html',
  styleUrl: './user-sidebar.css',
})
export class UserSidebar {

  // Inject the Auth service into the component's constructor - dependency injection
  constructor(private auth: Auth) {}




  onLogout(): void {
   this.auth.logout();
  }

}
