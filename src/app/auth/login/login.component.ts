import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/libs/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  email = '';
  password = '';
  invalidCredentials = false;
  loading = false;

  constructor(protected authService: AuthService, protected router: Router) {}

  async login(form: NgForm) {
    this.invalidCredentials = false;
    if (form.invalid) return;
    try {
      const result = await this.authService
        .login(this.email, this.password)
        .toPromise();
      if (!this.checkAdmin(result))
        this.router.navigateByUrl('/app/devices-list');
      else this.router.navigateByUrl('/app/users-list');
    } catch (e) {
      this.invalidCredentials = true;
    }
  }

  checkAdmin(user: any) {
    let isAdmin = false;
    user.role?.forEach((role: any) => {
      if (role.name === 'Admin') isAdmin = true;
    });
    return isAdmin;
  }

  goToRegister() {
    this.router.navigateByUrl('/auth/register');
  }
}
