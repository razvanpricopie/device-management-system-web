import { Component, Inject, OnInit } from '@angular/core';
import { MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';

@Component({
  selector: 'app-alert-snackbar',
  templateUrl: './alert-snackbar.component.html',
  styleUrls: ['./alert-snackbar.component.scss']
})
export class AlertSnackbarComponent implements OnInit {

  errorMessage ='';

  constructor(@Inject(MAT_SNACK_BAR_DATA) private data: any) { }

  ngOnInit(): void {
    this.errorMessage = this.data;
  }

}
