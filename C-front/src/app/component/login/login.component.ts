import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../service/authentication.service';
import { User } from 'src/user';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [AuthenticationService]
})
export class LoginComponent implements OnInit {

  // test model
  model: any = {};


  email = '';
  password = '';
  invalidLogin = false;

  constructor(private router: Router,
              private loginservice: AuthenticationService) { }

  ngOnInit() {
    console.log('Welcome on the login page');
  }

  checkLogin() {
    (this.loginservice.authenticate(this.email, this.password).subscribe(
      data => {
        this.router.navigate(['']);
        this.invalidLogin = false;
      },
      error => {
        this.invalidLogin = true;

      }
    )
    );

  }
  getLogin() {
    return this.loginservice.getUser().login;
  }

  logout() {
    return this.loginservice.logOut();
  }


}
