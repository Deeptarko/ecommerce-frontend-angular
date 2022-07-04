import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Route,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../_services/authentication.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(
    private router: Router,
    private authenticationService: AuthenticationService
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    const user = this.authenticationService.userValue;

    //Check if the user is present in the local storage
    if (!(Object.keys(user).length === 0)) {
      //Check if the user is authorized to visit the page
      const rolesFromRoute = route.data['roles'];
      return this.matchRoles(user.roles, rolesFromRoute);
    }

    //If the user is not logged in redirect to the login page
    this.router.navigate(['']);
    return false;
  }

  matchRoles(roles: string[], rolesFromRoute: string[]): boolean {
    if (rolesFromRoute) {
      for (let role = 0; role < rolesFromRoute.length; role++) {
        if (roles.indexOf(rolesFromRoute[role]) == -1) {
          return false;
        }
      }
    }
    //If the user is authorized to access the route then return true
    return true;
  }
}
