import { Component, OnInit, ViewChild } from '@angular/core';
import { Device } from 'src/app/libs/models/device';
import { DeviceService } from 'src/app/libs/services/device.service';
import { DevicesTableComponent } from './devices-table/devices-table.component';

@Component({
  selector: 'app-devices',
  templateUrl: './devices.component.html',
  styleUrls: ['./devices.component.scss'],
})
export class DevicesComponent implements OnInit {
  @ViewChild(DevicesTableComponent) devicesTable?: DevicesTableComponent;

  device: Device = {'name': 'test2', 'manufacturer': 'test', 'type':'test', 'operatingSystem':'test', 'osVersion':'test', 'processor':'test', 'ramAmount':'test'};

  constructor(private http: DeviceService) {}

  async ngOnInit() {
    
  }
}
