import { Component, Input } from '@angular/core';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss'],
})
export class LoadingComponent {
  @Input() value : number = 100;
  @Input() diameter: number = 100;
  @Input() mode : ProgressSpinnerMode ='indeterminate';
  @Input() strokeWidth : number = 10;
  @Input() overlay: boolean = true;
  @Input() color: string = "primary";
}
  