import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LayoutModule } from '@angular/cdk/layout';
import { AppMatModule } from '../shared/app-mat.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    AppMatModule,
    CommonModule,
    LayoutModule,
    SharedModule
  ]
})
export class HomeModule {}
