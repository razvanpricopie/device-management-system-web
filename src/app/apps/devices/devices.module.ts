import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DevicesRoutingModule } from './devices-routing.module';
import { DevicesTableComponent } from './devices-table/devices-table.component';
import { DevicesComponent } from './devices.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';


@NgModule({
  declarations: [
    DevicesComponent,
    DevicesTableComponent
  ],
  imports: [
    CommonModule,
    DevicesRoutingModule,
    NgxDatatableModule
  ]
})
export class DevicesModule { }
