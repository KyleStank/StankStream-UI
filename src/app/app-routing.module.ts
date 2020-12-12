import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

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
    path: 'not-found',
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./not-found/not-found.module').then(
            mod => mod.NotFoundModule
          )
      }
    ]
  },
  {
    path: 'colors',
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./colors/colors.module').then(
            mod => mod.ColorsModule
          )
      }
    ]
  },
  {
    path: '**',
    redirectTo: 'not-found'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
