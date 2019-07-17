import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { User } from 'src/user';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(
    private httpClient:HttpClient
  ) {

   }



  authenticate(email, password) {
    const headers = new HttpHeaders({ Authorization: 'Access-Control-Allow-Origin ' + btoa('test:test')});
    return this.httpClient.get<User>('http://localhost:8082/springboot-crud-rest/api/v1/users/',{headers}).pipe(
     map(
       userData => {
        sessionStorage.setItem('email',email);
        return userData;
       }
     )

    );
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('email')
    console.log(!(user === null))
    console.log(user);
    return user;

  }

  logOut() {
    console.log('Tentative de déconnexion');
    sessionStorage.removeItem('email')
  }

  // Permet de récupérer l'utilisateur en session par son email
  getUser() {
    return JSON.parse(sessionStorage.getItem('email'));
  }


// Permet de changer l'email de l'utilisateur en session
  setUser(user: any) {
    sessionStorage.setItem('user', JSON.stringify(user));
  }
}


//   authenticate(email, password) {
//     if (email === "admin" && password === "admin") {
//       sessionStorage.setItem('email', email)
//       return true;
//     } else {
//       return false;
//     }
//   }

//   isUserLoggedIn() {
//     let user = sessionStorage.getItem('username')
//     console.log(!(user === null))
//     return !(user === null)
//   }

//   logOut() {
//     sessionStorage.removeItem('username')
//   }
// }

