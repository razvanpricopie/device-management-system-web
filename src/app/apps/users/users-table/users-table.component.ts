import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { ColumnMode, TableColumn } from '@swimlane/ngx-datatable';
import { UserService } from 'src/app/libs/services/user.service';

@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.scss']
})
export class UsersTableComponent implements OnInit {
  public rows: any = [];
  public columns: TableColumn[] = [];
  public rowHeight = 40;
  public headerHeight = 40;

  ColumnMode = ColumnMode;

  @ViewChild('myTable') table: any;
  @ViewChild('emailTmpl') emailTmpl?: TemplateRef<any>;
  @ViewChild('nameTmpl') nameTmpl?: TemplateRef<any>;
  @ViewChild('buttonsTmpl') buttonsTmpl?: TemplateRef<any>;
  @ViewChild('deleteButtonTmpl') deleteButtonTmpl?: TemplateRef<any>;

  constructor(private http: UserService) { }


  async ngOnInit() {
    await this.getAllUsers();
    this.initColumns();
  }

  initColumns() {
    this.columns = [
      {
        name: '',
        width: 10,
        canAutoResize: false,
        sortable: false,
        draggable: false,
      },
      {
        name: 'Email',
        cellTemplate: this.emailTmpl,
        sortable: false,
        width: 20,
        resizeable: false,
      },
      {
        name: 'Name',
        cellTemplate: this.nameTmpl,
        sortable: false,
        width: 30,
      },
      {
        name: 'Actions',
        cellTemplate: this.buttonsTmpl,
        sortable: false,
        width: 30,
      },
    ];
  }

  async getAllUsers() {
    await this.http.getAll().toPromise().then((result) => this.rows =result);

    // if (result) this.rows = result;
  }

  async deleteUser(row: any) {
    await this.http
      .deleteUser(row.id)
      .toPromise()
      .then(() => this.getAllUsers());
  }
}
