import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AppMatModule } from './app-mat.module';
import { ColorPaletteComponent } from './components/color-palette/color-palette.component';
import { GridModule } from './components/grid/grid.module';
import { NavComponent } from './components/nav/nav.component';

@NgModule({
  declarations: [
    ColorPaletteComponent,
    NavComponent
  ],
  imports: [
    // AppMatModule
    CommonModule,
    GridModule
  ],
  exports: [
    // AppMatModule,
    CommonModule,
    GridModule,
    ColorPaletteComponent,
    NavComponent
  ]
})
export class SharedModule {}
