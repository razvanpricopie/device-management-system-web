import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private basePath = environment.API_ENDPOINT;

  constructor(private http: HttpClient) { }

  getAll(){
    return this.http.get(`${this.basePath}/api/user`);
  }

  getById(id: number){
    return this.http.get(`${this.basePath}/api/user/${id}`);
  }

  deleteUser(id: number){
    return this.http.delete(`${this.basePath}/api/user/${id}`);
  }
}
