import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AppMatModule } from './app-mat.module';
import { ColorPaletteComponent } from './components/color-palette/color-palette.component';
import { NavComponent } from './components/nav/nav.component';

@NgModule({
  declarations: [
    ColorPaletteComponent,
    NavComponent
  ],
  imports: [
    CommonModule
    // AppMatModule
  ],
  exports: [
    // AppMatModule,
    CommonModule,
    ColorPaletteComponent,
    NavComponent
  ]
})
export class SharedModule {}
