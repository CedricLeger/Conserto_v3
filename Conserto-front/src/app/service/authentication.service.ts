 import { Injectable } from '@angular/core';

 @Injectable({
   providedIn: 'root'
 })
 export class AuthenticationService {

   constructor() { }

  authenticate(email, password) {
     if (email === 'test' && password === 'test') {
       sessionStorage.setItem('email', email)
      console.log('email :'+ email+'  password:'+password)

       return true;
    } else {
       return false;
     }
   }

   isUserLoggedIn() {
     const user = sessionStorage.getItem('email')
     console.log(!(user == null))
     return !(user == null)
  }

   logOut() {
     sessionStorage.removeItem('email')
   }
 }


