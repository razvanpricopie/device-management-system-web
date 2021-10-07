import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
			// {
			// 	path: 'gps-tracker',
			// 	loadChildren: () => import('../apps/home/home.module').then((m) => m.HomeModule),
			// },
			// {
			// 	path: 'to-do-list',
			// 	loadChildren: () => import('../apps/to-do-page/to-do-page.module').then((m) => m.ToDoPageModule),
			// },
			// {
			// 	path: 'about',
			// 	loadChildren: () => import('../apps/about/about.module').then((m) => m.AboutModule),
			// },
			// {
			// 	path: '**',
			// 	redirectTo: 'gps-tracker',
			// },
		],
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
