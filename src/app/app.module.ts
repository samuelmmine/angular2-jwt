import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';

import { AuthService } from './services/auth.service';
import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './components/register/register.component';
import { StatusComponent } from './components/status/status.component';
import { EnsureAuthenticated } from './services/ensure-authenticated.service';
import { LoginRedirect } from './services/login-redirect.service';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    RegisterComponent,
    StatusComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'login',
        component: LoginComponent,
        canActivate: [LoginRedirect]
      },
      {
        path: 'register',
        component: RegisterComponent,
        canActivate: [LoginRedirect]
      },
      {
        path: 'status',
        component: StatusComponent,
        canActivate:
        [EnsureAuthenticated]
      }
    ])
  ],
  providers: [
    AuthService,
    EnsureAuthenticated,
    LoginRedirect
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }


// url artigo : https://realpython.com/blog/python/user-authentication-with-angular-4-and-flask/
// Slim + JWT : https://github.com/letsila/slim3-jwt-auth-example