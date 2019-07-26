import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthenticationService } from './authentication.service';
import { isNull } from 'util';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGaurdService implements CanActivate {





  constructor(private router: Router,
              private authService: AuthenticationService) { }


//               canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
//                 const currentUser = this.authService.currentUserValue;
//                 if (currentUser) {
//                 // authorised so return true
//                 return true;
//                 }
//                 this.router.navigate(['/login'], { queryParams: { returnUrl: state.url }});
//                 return false;
//               }

// }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      // Récupération de l'utilisateur connecté
      if(sessionStorage.getItem('email')==""){
        sessionStorage.removeItem('email');
      }
      console.log(sessionStorage);
      const isLoggedIn = !isNull(sessionStorage.getItem('email'));
      if (!isLoggedIn) {
        // Si pas d'utilisateur connecté : redirection vers la page de login
        console.log('Vous n\'êtes pas connectés');
        this.router.navigate(['/login']);

      }
      return isLoggedIn;
    }
//   canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
//     const currentUser = this.authService.currentUserValue;
//     if (currentUser) {
//         // authorised so return true
//         return true;
//     }

//     // not logged in so redirect to login page with the return url
//     this.router.navigate(['/login'], { queryParams: { returnUrl: state.url }});
//     return false;
// }
}


