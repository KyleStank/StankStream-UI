import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavComponent } from './nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { AppMatModule } from '../shared/app-mat.module';

@NgModule({
  declarations: [
    NavComponent
  ],
  imports: [
    AppMatModule,
    CommonModule,
    LayoutModule,
    RouterModule
  ],
  exports: [
    NavComponent
  ]
})
export class NavModule {}
