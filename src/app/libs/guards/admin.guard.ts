import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AdminGuard implements CanActivate {
  constructor(private router: Router, private authService: AuthService) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const user = this.authService.userValue;
    if (this.checkAdmin(user.role)) {
      return true;
    }

    this.router.navigate(['auth/login'], {
      queryParams: { returnUrl: state.url },
    });
    return false;
  }

  checkAdmin(user: any) {
    let isAdmin = false;
    user.forEach((r: any) => {
      if (r.name === 'Admin') isAdmin = true;
    });
    return isAdmin;
  }
}
