import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppsRoutingModule } from './apps-routing.module';
import { DevicesComponent } from './devices/devices.component';
import { DevicesModule } from './devices/devices.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    AppsRoutingModule,
    DevicesModule
  ]
})
export class AppsModule { }
