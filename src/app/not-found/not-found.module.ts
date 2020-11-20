import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LayoutModule } from '@angular/cdk/layout';
import { AppMatModule } from '../shared/app-mat.module';
import { SharedModule } from '../shared/shared.module';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './not-found.component';

const routes: Routes = [
  {
    path: '',
    component: NotFoundComponent
  }
];

@NgModule({
  declarations: [
    NotFoundComponent
  ],
  imports: [
    AppMatModule,
    RouterModule.forChild(routes),
    CommonModule,
    LayoutModule,
    SharedModule
  ]
})
export class NotFoundModule {}
