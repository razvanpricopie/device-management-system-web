import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DevicesRoutingModule } from './devices-routing.module';
import { DevicesTableComponent } from './devices-table/devices-table.component';
import { DevicesComponent } from './devices.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { DeviceDetailsDialogComponent } from './device-details-dialog/device-details-dialog.component';
import { SharedModule } from 'src/shared/shared.module';
import { DeviceUpdateDialogComponent } from './device-update-dialog/device-update-dialog.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    DevicesComponent,
    DevicesTableComponent,
    DeviceDetailsDialogComponent,
    DeviceUpdateDialogComponent,
  ],
  imports: [
    CommonModule,
    DevicesRoutingModule,
    NgxDatatableModule,
    SharedModule,
    FormsModule
  ],
  entryComponents: [
    DeviceUpdateDialogComponent
  ]
})
export class DevicesModule { }
