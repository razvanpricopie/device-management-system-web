import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularMaterialModule } from './angular-material/angular-material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AreYouSureComponent } from './components/are-you-sure/are-you-sure.component';
import { FormsModule } from '@angular/forms';
import { LoadingComponent } from './components/loading/loading/loading.component';



@NgModule({
  declarations: [
    AreYouSureComponent,
    LoadingComponent
  ],
  imports: [
    CommonModule,
    AngularMaterialModule,
    FlexLayoutModule,
    FormsModule,
  ],
  exports: [
    AngularMaterialModule,
    FlexLayoutModule,
    LoadingComponent
  ]
})
export class SharedModule { }
