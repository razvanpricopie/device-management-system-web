import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-are-you-sure',
  templateUrl: './are-you-sure.component.html',
  styleUrls: ['./are-you-sure.component.scss']
})
export class AreYouSureComponent implements OnInit {
  requireReason = false;
  reason: string='';
  @ViewChild('form') form?: NgForm;
  complexDeleteTextToReproduce = '';
  complexDeleteTextToReproduceInput = '';
  informationalDialog: boolean = false;
  constructor(
    public dialogRef: MatDialogRef<AreYouSureComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit() {
    if (this.data) {
      if (this.data.requireReason) {
        this.requireReason = true;
      }
      this.complexDeleteTextToReproduce = this.data.complexDeleteTextToReproduce;
      this.informationalDialog = this.data.informationalDialog;
    }
  }

  closeDialog() {
    if (this.requireReason) {
      if (this.form?.valid) {
        this.dialogRef.close(this.reason);
      }
    } else {
      this.dialogRef.close(true);
    }
  }
}
