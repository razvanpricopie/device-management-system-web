import { Component, OnInit, ViewChild } from '@angular/core';
import { DevicesTableComponent } from '../devices/devices-table/devices-table.component';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  @ViewChild(DevicesTableComponent) devicesTable?: DevicesTableComponent;

  constructor() { }

  ngOnInit(): void {
  }

}
