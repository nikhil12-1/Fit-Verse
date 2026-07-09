import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing-module';
import { Dashboard } from './dashboard/dashboard';
import { Profile } from './profile/profile';

@NgModule({
  declarations: [Dashboard, Profile],
  imports: [CommonModule, UserRoutingModule],
})
export class UserModule {}
