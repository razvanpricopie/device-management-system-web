import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TableColumn, ColumnMode } from '@swimlane/ngx-datatable';
import { DeviceService } from 'src/app/libs/services/device.service';
import { DeviceDetailsDialogComponent } from '../device-details-dialog/device-details-dialog.component';

@Component({
  selector: 'app-devices-table',
  templateUrl: './devices-table.component.html',
  styleUrls: ['./devices-table.component.scss']
})
export class DevicesTableComponent implements OnInit {

  public rows : any = [];
  public columns: TableColumn[] = [];
  public rowHeight = 60;
  public headerHeight = 50;

  devices: any = [];

  ColumnMode = ColumnMode;


  @ViewChild('myTable') table: any;
  @ViewChild('nameTmpl') nameTmpl?: TemplateRef<any>;
  @ViewChild('manufacturerTmpl') manufacturerTmpl?: TemplateRef<any>;
  @ViewChild('typeTmpl') typeTmpl?: TemplateRef<any>;
  @ViewChild('userTmpl') operatingSystemTmpl?: TemplateRef<any>;
  @ViewChild('buttonsTmpl') buttonsTmpl?: TemplateRef<any>;
  @ViewChild('createButtonTmpl') createButtonTmpl?: TemplateRef<any>;
  @ViewChild('updateButtonTmpl') updateButtonTmpl?: TemplateRef<any>;
  @ViewChild('deleteButtonTmpl') deleteButtonTmpl?: TemplateRef<any>;

  constructor(private http: DeviceService, private dialog: MatDialog) { }

  async ngOnInit(){
    await this.getAllDevices();
    this.initColumns();
  }

  initColumns(){
    this.columns =[
      {
        name: 'Name',
        cellTemplate: this.nameTmpl,
        sortable: false,
        width: 20,
        resizeable: false
      },
      {
        name: 'Manufacturer',
        cellTemplate: this.manufacturerTmpl,
        sortable: false,
        width: 30,
      },
      {
        name: 'Type',
        cellTemplate: this.typeTmpl,
        sortable: false,
        width: 20,
      },
      {
        name: 'User',
        sortable: false,
        width: 20,
      },
      {
        name: 'Actions',
        cellTemplate: this.buttonsTmpl,
        sortable: false,
        width: 20,
        
      }
    ]
  }

  async getAllDevices(){
    const result = await this.http.getAll().toPromise();

    if(result) this.rows = result;
  }

  async getDevice(id: number){
    const result : any = await this.http.getById(id).toPromise();

  }

  getDeviceDetail(result: any){
    return {
      id: result.id,
      name: result.name,
      manufacturer: result.manufacturer,
      type: result.type,
      operatingSystem: result.operatingSystem,
      osVersion: result.osVersion,
      processor: result.processor,
      ramAmount: result.ramAmount
    }
  }

  showDialog(event: any){
    if(event.type == 'click' && event.cellIndex !== 0){
      this.dialog.open(DeviceDetailsDialogComponent, {
        data: this.getDeviceDetail(event.row),
        width: '500px',
      });
    }
  }

}
