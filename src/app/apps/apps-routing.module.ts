import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'devices-list',
        loadChildren: () =>
          import('../apps/devices/devices.module').then((m) => m.DevicesModule),
      },
      {
        path: 'users-list',
        loadChildren: () =>
          import('../apps/users/users.module').then((m) => m.UsersModule),
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppsRoutingModule { }
