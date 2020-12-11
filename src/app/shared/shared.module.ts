import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AppMatModule } from './app-mat.module';
import { NavComponent } from './components/nav/nav.component';

@NgModule({
  declarations: [
    NavComponent
  ],
  imports: [
    CommonModule
    // AppMatModule
  ],
  exports: [
    // AppMatModule,
    CommonModule,
    NavComponent
  ]
})
export class SharedModule {}
