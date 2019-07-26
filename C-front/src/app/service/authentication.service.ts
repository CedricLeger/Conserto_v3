import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { User } from 'src/app/module/user';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private currentUserSubject: BehaviorSubject<User>;
public currentUser: Observable<User>;

  constructor(
    private httpClient:HttpClient
  ) {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
   }


//    public get currentUserValue(): User {
//     return this.currentUserSubject.value;
//     }

//     login(email: string, password: string) {
//       return this.httpClient.post<any>(`auth/login`, { email, password })
//       .pipe(map(user => {
//       if (user && user.token) {
//       // store user details in local storage to keep user logged in
//       localStorage.setItem('currentUser', JSON.stringify(user.result));
//       this.currentUserSubject.next(user);
//       }

//       return user;
//       }));
//       }

//       logout() {
//       // remove user data from local storage for log out
//       localStorage.removeItem('currentUser');
//       this.currentUserSubject.next(null);
//       }
//     }

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



