import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { About } from './appComponent/about/about';
import { Gallery } from './appComponent/gallery/gallery';
import { Exercises } from './appComponent/exercises/exercises';
import { Bmi } from './appComponent/bmi/bmi';
import { JoinNow } from './appComponent/join-now/join-now';
import { Login } from './appComponent/login/login';
import { Register } from './appComponent/register/register';
import { Home } from './appComponent/home/home';
import { Contact } from './appComponent/contact/contact';
import { PublicLayout } from './layouts/public-layout/public-layout';
import { AuthLayout } from './layouts/auth-layout/auth-layout';
import { UserLayout } from './layouts/user-layout/user-layout';

// const routes: Routes = [
//   { path: '', component: Home },
//   { path: 'about', component: About },
//   { path: 'gallery', component: Gallery },
//   { path: 'exercises', component: Exercises },
//   { path: 'bmi', component: Bmi },
//   { path: 'join', component: JoinNow },
//   { path: 'login', component: Login },
//   { path: 'register', component: Register },
//   { path: 'contact', component: Contact }




  const routes: Routes = [

  // Public Layout
  {
    path: '',
    component: PublicLayout,
    children: [

      {
        path: '',
        component: Home
      },

      {
        path: 'about',
        component: About
      },

      {
        path: 'gallery',
        component: Gallery
      },

      {
        path: 'exercise',
        component: Exercises
      },

      {
        path: 'bmi',
        component: Bmi
      },

      {
        path: 'login',
        component: Login
      },
      {
        path: 'register',
        component: Register
      },

      {
        path: 'join',
        component: JoinNow
      },
      
      {
        path: 'contact',
        component: Contact
      },

      {
        path: 'contact',
        component: Contact
      }

    ]
  },

  // Lazy Loaded Auth Module : localhost:4200/auth/login
  {
    path: 'auth',
    component: AuthLayout,
    loadChildren: () =>
      import('./modules/auth/auth-module').then(m => m.AuthModule)
  },

  // Lazy Loaded User Module
  {
    path: 'user',
    component: UserLayout,
    loadChildren: () =>
      import('./modules/user/user-module').then(m => m.UserModule)
  },

  {
    path: '**',
    redirectTo: ''
  }

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
