import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Device } from 'src/app/libs/models/device';
import { DeviceService } from 'src/app/libs/services/device.service';

@Component({
  selector: 'app-device-create-dialog',
  templateUrl: './device-create-dialog.component.html',
  styleUrls: ['./device-create-dialog.component.scss']
})
export class DeviceCreateDialogComponent implements OnInit {
  @ViewChild('updateForm') updateForm?: NgForm;
  device: Device = new Device(); 

  constructor(private http: DeviceService) { }

  ngOnInit(): void {
  }

  async createDevice(createForm: NgForm){
    const result = await this.http.createDevice(this.device).toPromise();
    console.log(result);
  }

}
