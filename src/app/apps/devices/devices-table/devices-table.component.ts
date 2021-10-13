import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TableColumn, ColumnMode } from '@swimlane/ngx-datatable';
import { AuthService } from 'src/app/libs/auth/auth.service';
import { Device } from 'src/app/libs/models/device';
import { DeviceService } from 'src/app/libs/services/device.service';
import { UserService } from 'src/app/libs/services/user.service';
import { DeviceDetailsDialogComponent } from '../device-details-dialog/device-details-dialog.component';
import { DeviceUpdateDialogComponent } from '../device-update-dialog/device-update-dialog.component';

@Component({
  selector: 'app-devices-table',
  templateUrl: './devices-table.component.html',
  styleUrls: ['./devices-table.component.scss'],
})
export class DevicesTableComponent implements OnInit {
  public rows: any = [];
  public columns: TableColumn[] = [];
  public rowHeight = 55;
  public headerHeight = 40;

  device: Device = new Device();

  ColumnMode = ColumnMode;

  @ViewChild('myTable') table: any;
  @ViewChild('nameTmpl') nameTmpl?: TemplateRef<any>;
  @ViewChild('manufacturerTmpl') manufacturerTmpl?: TemplateRef<any>;
  @ViewChild('typeTmpl') typeTmpl?: TemplateRef<any>;
  @ViewChild('userTmpl') userTmpl?: TemplateRef<any>;
  @ViewChild('buttonsTmpl') buttonsTmpl?: TemplateRef<any>;

  constructor(
    private deviceService: DeviceService,
    private dialog: MatDialog,
    private authService: AuthService
  ) {}

  async ngOnInit() {
    await this.getAllDevices();
    this.initColumns();
  }

  initColumns() {
    this.columns = [
      {
        name: '',
        width: 10,
        canAutoResize: false,
        sortable: false,
      },
      {
        name: 'Name',
        cellTemplate: this.nameTmpl,
        sortable: false,
        width: 5,
      },
      {
        name: 'Manufacturer',
        cellTemplate: this.manufacturerTmpl,
        sortable: false,
        width: 5,
      },
      {
        name: 'Type',
        cellTemplate: this.typeTmpl,
        sortable: false,
        width: 5,
      },
      {
        name: 'Actions',
        cellTemplate: this.buttonsTmpl,
        sortable: false,
        width: 10,
        
      },
    ];
  }

  async getAllDevices() {
    await this.deviceService
      .getAll()
      .toPromise()
      .then((result) => (this.rows = result));
  }

  async getDevice(id: number) {
    const result: any = await this.deviceService.getById(id).toPromise();
  }

  getDeviceDetail(result: any) {
    return {
      id: result.id,
      name: result.name,
      manufacturer: result.manufacturer,
      type: result.type,
      operatingSystem: result.operatingSystem,
      osVersion: result.osVersion,
      processor: result.processor,
      ramAmount: result.ramAmount,
    };
  }

  showDialog(event: any) {
    if (event.type == 'click' && event.cellIndex !== 0) {
      this.dialog.open(DeviceDetailsDialogComponent, {
        data: this.getDeviceDetail(event.row),
        width: '500px',
      });
    }
  }

  async updateDeviceDialog(row: any) {
    const result = await this.dialog
      .open(DeviceUpdateDialogComponent, {
        data: this.getDeviceDetail(row),
        width: '500px',
      })
      .afterClosed()
      .toPromise();

    if (!result) return;

    await this.getAllDevices();
  }

  async openAddDeviceDialog() {
    const result = await this.dialog
      .open(DeviceUpdateDialogComponent, {
        width: '500px',
      })
      .afterClosed()
      .toPromise();

    if (!result) return;

    await this.getAllDevices();
  }

  async deleteDevice(row: any) {
    await this.deviceService
      .deleteDevice(row.id)
      .toPromise()
      .then(() => this.getAllDevices());
  }

  async assignDevice(row: any) {
    this.device.userId = this.authService.userValue.id;
    await this.deviceService
      .assignDevice(row.id, this.device)
      .toPromise()
      .then(() => {
        this.getAllDevices();
      });
  }

  async unassignDevice(row: any) {
    this.device.userId = this.authService.userValue.id;
    await this.deviceService
      .unassignDevice(row.id, this.device)
      .toPromise()
      .then(() => {
        this.getAllDevices();
      });
  }

  checkDeviceUserId(row: any){
    if(row.userId == this.authService.userValue.id) return true
      return false;
  }
}
