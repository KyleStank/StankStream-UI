import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FourOFourComponent } from './404/404.component';
import { DashboardComponent } from './home/dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./home/home.module').then(
            mod => mod.HomeModule
          )
      }
    ]
  },
  {
    path: 'dashboard',
    redirectTo: ''
  },
  {
    path: '404',
    component: FourOFourComponent
  },
  {
    path: '**',
    redirectTo: '404'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
