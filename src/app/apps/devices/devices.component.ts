import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DeviceCreateDialogComponent } from './device-create-dialog/device-create-dialog.component';
import { DevicesTableComponent } from './devices-table/devices-table.component';

@Component({
  selector: 'app-devices',
  templateUrl: './devices.component.html',
  styleUrls: ['./devices.component.scss'],
})
export class DevicesComponent implements OnInit {


  @ViewChild(DevicesTableComponent) devicesTable?: DevicesTableComponent;

  constructor(private dialog: MatDialog) {}

  async ngOnInit() {
  }

  openAddDeviceDialog(){
    this.dialog.open(DeviceCreateDialogComponent, {
      width: '500px',
    });
  }


}
