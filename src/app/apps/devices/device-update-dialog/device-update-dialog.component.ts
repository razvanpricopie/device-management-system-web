import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { finalize } from 'rxjs/operators';
import { DeviceTypes } from 'src/app/libs/enums/device-type';
import { EnumUtils } from 'src/app/libs/enums/enum-utils';
import { Device } from 'src/app/libs/models/device';
import { DeviceService } from 'src/app/libs/services/device.service';

@Component({
  selector: 'app-device-update-dialog',
  templateUrl: './device-update-dialog.component.html',
  styleUrls: ['./device-update-dialog.component.scss'],
})
export class DeviceUpdateDialogComponent implements OnInit {
  @ViewChild('updateForm') updateForm?: NgForm;
  deviceTypes = EnumUtils.listEnum(DeviceTypes);
  enumKeys = [];
  device: Device;
  type = 1;
  
  
  constructor(
    @Inject(MAT_DIALOG_DATA) private data: any,
    private deviceService: DeviceService,
    private dialog: MatDialogRef<DeviceUpdateDialogComponent>,
  ) {
    this.device = this.data;
    console.log(this.device);
  }

  ngOnInit() {
    if (this.device) {
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
    else {
      this.device = new Device();
    }
  }

  submit(form: NgForm){
    if(form.invalid) return;
    if(this.device.id) this.update();
    else this.createDevice()
  }

  async update() {
    await this.deviceService.updateDevice(this.device.id, this.device).pipe(finalize(()=>{
      this.dialog.close(true);
    })).toPromise();

  }

  async createDevice(){
    await this.deviceService.createDevice(this.device).pipe(finalize(()=>{
      this.dialog.close(true);
    })).toPromise();
  }
}
