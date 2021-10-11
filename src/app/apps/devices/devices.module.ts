import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DevicesRoutingModule } from './devices-routing.module';
import { DevicesTableComponent } from './devices-table/devices-table.component';
import { DevicesComponent } from './devices.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { DeviceDetailsDialogComponent } from './device-details-dialog/device-details-dialog.component';
import { SharedModule } from 'src/shared/shared.module';


@NgModule({
  declarations: [
    DevicesComponent,
    DevicesTableComponent,
    DeviceDetailsDialogComponent
  ],
  imports: [
    CommonModule,
    DevicesRoutingModule,
    NgxDatatableModule,
    SharedModule
  ]
})
export class DevicesModule { }
