import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../../services/auth.service';
import { User } from '../../models/user';

@Component({
  selector: 'status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})
export class StatusComponent implements OnInit {

  isLoggedIn: boolean = false;
  user: User = new User();
  usuario:User = '';
  estados:string[] = [];

  constructor(private router:Router, private auth: AuthService) {}

  offLogin(): void {
    localStorage.setItem('token', '');
    this.router.navigate(['home']);
    this.user = null;
    console.log('Usuário off:' + this.user);
  }

  getUsers() {
    this.usuario = this.auth.getUsers();
    this.auth.getUsers()
    .then((user) => {
      this.usuario = user.json();
      console.log(this.usuario);
    })
    .catch((err) => {
      console.log(err);
    });
  }

  getAllFederatives(){
    let estados = this.auth.getAllFederatives();
    this.auth.getAllFederatives()
    .then((user) => {
      this.estados = user.json();
      console.log(this.estados);
    })
    .catch((err) => {
      console.log(err);
    });
  }

  ngOnInit(): void {
    
    const token = localStorage.getItem('token');
    if (token != '') {
      this.isLoggedIn = true;

      this.getUsers();

      this.getAllFederatives();

      this.usuario;
    }
  }
}