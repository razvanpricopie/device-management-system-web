import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Device } from 'src/app/libs/models/device';

@Component({
  selector: 'app-device-details-dialog',
  templateUrl: './device-details-dialog.component.html',
  styleUrls: ['./device-details-dialog.component.scss']
})
export class DeviceDetailsDialogComponent implements OnInit {
  device: Device = new Device();

  constructor(@Inject(MAT_DIALOG_DATA) private data: any, private dialog: MatDialogRef<DeviceDetailsDialogComponent>) { }

  ngOnInit(): void {
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

  close(){
    this.dialog.close();
  }

}
