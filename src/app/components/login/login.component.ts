import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../../services/auth.service';
import { User } from '../../models/user';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: User = new User();
  constructor(private router:Router ,private auth: AuthService) {}

  onLogin(): void {
    this.auth.login(this.user)
    .then((user) => {
      localStorage.setItem('token', user.json().token);
      console.log(user.json().token);
      this.router.navigate(['status']);
    })
    .catch((err) => {
      console.log(err);
    });

    console.log(this.user);
  }

  aviso(){
     console.log( this.auth.aviso());
  }

  ngOnInit(){
    this.aviso();
  }

}
