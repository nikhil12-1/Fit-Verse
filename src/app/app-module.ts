import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';  

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Header } from './appComponent/header/header';
import { Footer } from './appComponent/footer/footer';
import { Home } from './appComponent/home/home';
import { About } from './appComponent/about/about';
import { Login } from './appComponent/login/login';
import { Register } from './appComponent/register/register';
import { Contact } from './appComponent/contact/contact';
import { Bmi } from './appComponent/bmi/bmi';
import { JoinNow } from './appComponent/join-now/join-now';
import { Gallery } from './appComponent/gallery/gallery';
import { Exercises } from './appComponent/exercises/exercises';
import { PublicLayout } from './layouts/public-layout/public-layout';
import { AuthLayout } from './layouts/auth-layout/auth-layout';
import { UserLayout } from './layouts/user-layout/user-layout';
import { UserHeader } from './layouts/user-header/user-header';
import { UserFooter } from './layouts/user-footer/user-footer';
import { UserSidebar } from './layouts/user-sidebar/user-sidebar';

@NgModule({
  declarations: [
    App,
    Header,
    Footer,
    Home,
    About,
    Login,
    Register,
    Contact,
    Bmi,
    JoinNow,
    Gallery,
    Exercises,
    PublicLayout,
    AuthLayout,
    UserLayout,
    UserHeader,
    UserFooter,
    UserSidebar,
  ],
  imports: [BrowserModule, AppRoutingModule,FormsModule, HttpClientModule],
  providers: [provideBrowserGlobalErrorListeners()],
  bootstrap: [App],
})
export class AppModule {}
