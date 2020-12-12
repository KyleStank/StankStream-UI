import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LayoutModule } from '@angular/cdk/layout';
import { AppMatModule } from '../shared/app-mat.module';
import { SharedModule } from '../shared/shared.module';
import { RouterModule, Routes } from '@angular/router';
import { ColorsComponent } from './colors.component';

const routes: Routes = [
  {
    path: '',
    component: ColorsComponent
  }
];

@NgModule({
  declarations: [
    ColorsComponent
  ],
  imports: [
    // AppMatModule,
    RouterModule.forChild(routes),
    CommonModule,
    LayoutModule,
    SharedModule
  ]
})
export class ColorsModule {}
