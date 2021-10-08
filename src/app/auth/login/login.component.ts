import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/libs/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  email = '';
  password = '';
  invalidCredentials = false;
  loading = false;

  constructor(protected authService: AuthService, protected router: Router) { }

  async login(form: NgForm) {
    this.invalidCredentials = false;
    if (form.invalid) return;
    try {
      this.loading = true;
      const result = await this.authService.login(this.email, this.password).toPromise();

      this.router.navigateByUrl('/app');

      // if(!this.checkAdmin(result)) this.router.navigateByUrl('/app/to-do-list');
      // else this.router.navigateByUrl('/app/gps-tracker');
    } catch (e) {
      this.invalidCredentials = true;
    } finally {
      this.loading = false;
    }
  }

  checkAdmin(user: any){
    let isAdmin = false;
    user.roles.forEach((role : any) => {
      if(role.role === "ADMIN") isAdmin = true;
    });
    return isAdmin;
  }

  goToRegister() {
    this.router.navigateByUrl('/auth/register');
  }
}