import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor() { }

  authenticate(email, password) {
    if (email === 'test' && password === 'test') {
      sessionStorage.setItem('email', email)
      return true;
    } else {
      return false;
    }
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('email')
    console.log(!(user == null))
    return !(user == null)
  }

  logOut() {
    sessionStorage.removeItem('email')
  }
}


