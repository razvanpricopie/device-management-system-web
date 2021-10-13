import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ColumnMode, TableColumn } from '@swimlane/ngx-datatable';
import { finalize } from 'rxjs/operators';
import { UserService } from 'src/app/libs/services/user.service';
import { AreYouSureComponent } from 'src/shared/components/are-you-sure/are-you-sure.component';

@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.scss']
})
export class UsersTableComponent implements OnInit {
  rows: any = [];
  columns: TableColumn[] = [];
  rowHeight = 55;
  headerHeight = 40;
  loading = false;

  ColumnMode = ColumnMode;

  @ViewChild('myTable') table: any;
  @ViewChild('emailTmpl') emailTmpl?: TemplateRef<any>;
  @ViewChild('nameTmpl') nameTmpl?: TemplateRef<any>;
  @ViewChild('buttonsTmpl') buttonsTmpl?: TemplateRef<any>;
  @ViewChild('deleteButtonTmpl') deleteButtonTmpl?: TemplateRef<any>;

  constructor(private userService: UserService,private dialog: MatDialog) { }

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
        width: 5,
        resizeable: false,
      },
      {
        name: 'Name',
        cellTemplate: this.nameTmpl,
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


  async getAllUsers() {
    this.loading = true;
    await this.userService.getAll().pipe(finalize(()=>(this.loading = false))).toPromise().then((result) => this.rows =result);
  }

  async deleteUser(row: any) {
    const isSure = await this.openAreYouSureDialog();
    if (!isSure) return;

    await this.userService
      .deleteUser(row.id)
      .toPromise()
      .then(() => this.getAllUsers());
  }
  
  openAreYouSureDialog() {
    return this.dialog
      .open(AreYouSureComponent, {
        width: '340px'
      })
      .afterClosed()
      .toPromise();
  }
}
