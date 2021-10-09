import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class LoggedInAuthGuard implements CanActivate {
  constructor(
    private router: Router,
    private authService: AuthService
  ) { }
  
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot){
      const user = this.authService.userValue;
      if(user.token){
        this.router.navigate(['/app'], { queryParams: { returnUrl: state.url } });
        return true;
      }

      return false;
    }
  
}