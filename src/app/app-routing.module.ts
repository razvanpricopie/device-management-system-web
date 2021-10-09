import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './libs/guards/auth.guard';
import { LoggedInAuthGuard } from './libs/guards/logged-in-auth.guard';

const routes: Routes = [
  {
    path: 'app',
    loadChildren: () => import('./core/core.module').then((m) => m.CoreModule),
    canActivate: [AuthGuard] 
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
    canActivate: [LoggedInAuthGuard]
  },
  { path: '', pathMatch: 'full', redirectTo: 'app' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
