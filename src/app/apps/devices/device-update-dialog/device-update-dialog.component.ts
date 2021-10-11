import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Device } from 'src/app/libs/models/device';
import { DeviceService } from 'src/app/libs/services/device.service';

@Component({
  selector: 'app-device-update-dialog',
  templateUrl: './device-update-dialog.component.html',
  styleUrls: ['./device-update-dialog.component.scss']
})
export class DeviceUpdateDialogComponent implements OnInit {
  @ViewChild('updateForm') updateForm?: NgForm;
  device: Device = new Device();

  constructor(@Inject(MAT_DIALOG_DATA) private data: any, private http: DeviceService, private router: Router) { }

  ngOnInit(){
    if(this.data.id){
      this.device = {
        id: this.data.id,
        name: this.data.name,
        manufacturer: this.data.manufacturer,
        type: this.data.type,
        operatingSystem: this.data.operatingSystem,
        osVersion: this.data.osVersion,
        processor: this.data.processor,
        ramAmount: this.data.ramAmount,
      };
    }
  }

  async update(updateForm: NgForm){
    if(updateForm.invalid) return;

    try{
      await this.http.updateDevice(this.device.id, this.device).toPromise();
    }finally{
      this.router.navigateByUrl('app/devices-list');
    }
  }
}
