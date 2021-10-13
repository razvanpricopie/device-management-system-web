import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './libs/guards/auth.guard';

const routes: Routes = [
  {
    path: 'app',
    loadChildren: () => import('./core/core.module').then((m) => m.CoreModule),
    canActivate: [AuthGuard] 
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
  },
  { path: '', pathMatch: 'full', redirectTo: 'app' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
