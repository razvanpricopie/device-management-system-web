import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { SharedModule } from 'src/shared/shared.module';
import { FormsModule } from '@angular/forms';
import { UsersTableComponent } from './users-table/users-table.component';


@NgModule({
  declarations: [
    UsersComponent,
    UsersTableComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    NgxDatatableModule,
    SharedModule,
    FormsModule
  ]
})
export class UsersModule { }
