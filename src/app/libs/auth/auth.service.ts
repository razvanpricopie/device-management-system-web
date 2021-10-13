import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { JwtUser } from '../models/jwt-user';

import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private basePath = environment.API_ENDPOINT;
  private userSubject: BehaviorSubject<JwtUser>;
  public jwtUser: Observable<JwtUser>;

  constructor(private http: HttpClient, private router: Router) {
    this.userSubject = new BehaviorSubject<JwtUser>(JSON.parse(localStorage.getItem('user') || '{}'));
    this.jwtUser = this.userSubject.asObservable();
  }

  get userValue(): any {
    return this.userSubject.value;
  }

  login(email: string, password: string) {
    return this.http.post(`${this.basePath}/api/auth/login`, { email: email, password: password }).pipe(map((user: any) => {
      localStorage.setItem('user', JSON.stringify(user));
      this.userSubject.next(user);
      return user;
    }));
  }

  logout() {
    localStorage.removeItem('email');
    this.userSubject.next({});
    this.router.navigate(['auth/login']);
  }

  register(email: string, name: string, password: string) {
    return this.http.post(`${this.basePath}/api/auth/register`,
      { email: email, name: name, password: password});
  }
}