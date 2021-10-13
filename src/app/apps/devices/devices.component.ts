import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DeviceUpdateDialogComponent } from './device-update-dialog/device-update-dialog.component';
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
}
