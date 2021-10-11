import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppsRoutingModule } from './apps-routing.module';
import { DevicesModule } from './devices/devices.module';
import { UsersModule } from './users/users.module';


@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    AppsRoutingModule,
    DevicesModule,
    UsersModule
  ]
})
export class AppsModule { }
