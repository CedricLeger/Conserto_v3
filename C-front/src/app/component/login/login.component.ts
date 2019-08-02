import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../service/authentication.service';
import { User } from 'src/app/module/user';
import { NgForm, EmailValidator } from '@angular/forms';

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
  hide = true;

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
    console.log('déconnection : '+ this.email)
    sessionStorage.removeItem(this.email);
    return this.loginservice.logOut();
  }


}
// import { Component, OnInit } from '@angular/core';
// import { Router, ActivatedRoute } from '@angular/router';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { ToastrService } from 'ngx-toastr';

// import { AuthenticationService } from '../../service/authentication.service';

// @Component({
// selector: 'app-login',
// templateUrl: './login.component.html'
// })
// export class LoginComponent implements OnInit {
// loginForm: FormGroup;
// loading = false;
// submitted = false;
// returnUrl: string;

// constructor(
// private formBuilder: FormBuilder,
// private route: ActivatedRoute,
// private router: Router,
// private authenticationService : AuthenticationService,
// private toastr: ToastrService

// ) { }

// ngOnInit() {
// this.loginForm = this.formBuilder.group({
// email: ['', Validators.required],
// password: ['', Validators.required]
// });

// }

// // for accessing to form fields
// get fval() { return this.loginForm.controls; }

// onFormSubmit() {
// this.submitted = true;
// if (this.loginForm.invalid) {
// return;
// }

// this.loading = true;
// this.authenticationService.login(this.fval.email.value, this.fval.password.value)
// .subscribe(
// data => {
// this.router.navigate(['/']);
// },
// error => {
// this.toastr.error(error.error.message, 'Error');
// this.loading = false;
// });
// }
// }
