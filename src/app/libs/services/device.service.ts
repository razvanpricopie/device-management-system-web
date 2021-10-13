import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Device } from '../models/device';

@Injectable({
  providedIn: 'root'
})
export class DeviceService {
  private basePath = environment.API_ENDPOINT;
  
  constructor(private http: HttpClient) { }

  getAll(){
    return this.http.get(`${this.basePath}/api/device`);
  }

  getById(id: number){
    return this.http.get(`${this.basePath}/api/device/${id}`);
  }

  createDevice(device: Device){
    return this.http.post(`${this.basePath}/api/device`, device);
  }

  updateDevice(id: number, updatedDevice: Device){
    return this.http.put(`${this.basePath}/api/device/${id}`, updatedDevice);
  }

  deleteDevice(id: number){
    return this.http.delete(`${this.basePath}/api/device/${id}`);
  }

  assignDevice(id: number, deviceAssigned: Device){
    return this.http.put(`${this.basePath}/api/device/AssignDevice/${id}`, deviceAssigned);
  }

  unassignDevice(id: number, unassignedDevice: Device){
    return this.http.put(`${this.basePath}/api/device/UnassignDevice/${id}`, unassignedDevice);
  }
}
