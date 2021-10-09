import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { TableColumn } from '@swimlane/ngx-datatable';

@Component({
  selector: 'app-devices-table',
  templateUrl: './devices-table.component.html',
  styleUrls: ['./devices-table.component.scss']
})
export class DevicesTableComponent implements OnInit {

  string = 'bunaciara';
  public rows = [];
  public columns: TableColumn[] = [];
  public rowHeight = 60;
  public headerHeight = 50;

  @ViewChild('myTable') table: any;
  // @ViewChild('methodTmpl') methodTmpl: TemplateRef<any>;

  constructor() { }

  ngOnInit(): void {
  }

  initColumns(){
    this.columns =[
      {
        name: '',
        width: 48,
        canAutoResize: false,
        sortable: false,
        draggable: false,
        headerCheckboxable: true,
        checkboxable: true
      },
      {
        name: 'Name',
        cellTemplate: this.string,
        sortable: false,
        width: 50,
      },
      {
        name: 'Manufacturer',
        cellTemplate: this.string,
        sortable: false,
        width: 50,
      },
      {
        name: 'Type',
        cellTemplate: this.string,
        sortable: false,
        width: 50,
      },
      {
        name: 'Operating System (OS)',
        cellTemplate: this.string,
        sortable: false,
        width: 50,
      },
      {
        name: 'OS version',
        cellTemplate: this.string,
        sortable: false,
        width: 50,
      },
      {
        name: 'Processor',
        cellTemplate: this.string,
        sortable: false,
        width: 50,
      },
      {
        name: 'RAM amount',
        cellTemplate: this.string,
        sortable: false,
        width: 50,
      }
    ]
  }

}
