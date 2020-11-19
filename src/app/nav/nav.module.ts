import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavComponent } from './nav.component';
import { LayoutModule } from '@angular/cdk/layout';

@NgModule({
  declarations: [
    NavComponent
  ],
  imports: [
    CommonModule,
    LayoutModule,
    RouterModule
  ],
  exports: [
    NavComponent
  ]
})
export class NavModule {}
