import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularMaterialModule } from './angular-material/angular-material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AreYouSureComponent } from './components/are-you-sure/are-you-sure.component';
import { FormsModule } from '@angular/forms';
import { LoadingComponent } from './components/loading/loading/loading.component';
import { AlertSnackbarComponent } from './components/alert-snackbar/alert-snackbar.component';



@NgModule({
  declarations: [
    AreYouSureComponent,
    LoadingComponent,
    AlertSnackbarComponent
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
    LoadingComponent,
    AlertSnackbarComponent
  ]
})
export class SharedModule { }
