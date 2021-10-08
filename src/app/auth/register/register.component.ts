import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/libs/auth/auth.service';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  @ViewChild('registerForm') registerForm?: NgForm;
  email = '';
  name = '';
  password = '';

  constructor(private http: AuthService, private router: Router) { }

  goToLogin() {
    this.router.navigateByUrl('/auth/login');
  }

  async register(registerForm: NgForm){
    if(registerForm.invalid) return;

    try{
      await this.http.register(this.email, this.name, this.password)
        .pipe(finalize(() => this.router.navigateByUrl('/')))
        .toPromise();
    } finally{
      this.router.navigateByUrl('auth/login');
    }
  }

}
