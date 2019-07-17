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

  // canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
  //   if (this.authService.isUserLoggedIn()) {
  //     return true;
  //   }

  //   this.router.navigate(['login']);
  //   console.log("echec de la connexion");
  //   return false;

  // }



  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      // Récupération de l'utilisateur connecté
      console.log(sessionStorage);
      const isLoggedIn = !isNull(sessionStorage.getItem('email'));

      if (!isLoggedIn) {
        // Si pas d'utilisateur connecté : redirection vers la page de login
        console.log('Vous n\'êtes pas connectés');
        this.router.navigate(['/login']);

      }
      return isLoggedIn;
    }

}
