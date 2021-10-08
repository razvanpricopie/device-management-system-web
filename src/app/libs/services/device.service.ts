import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DeviceService {
  private basePath = environment.API_ENDPOINT;
  
  constructor(private http: HttpClient) { }

  getById(id: number){
    return this.http.get(`${this.basePath}/api/device/${id}`);
  }
}
