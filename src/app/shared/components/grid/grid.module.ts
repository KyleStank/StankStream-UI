import { LayoutModule } from '@angular/cdk/layout';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ColumnComponent } from './column/column.component';
import { ContainerFullComponent } from './container-full/container-full.component';
import { ContainerComponent } from './container/container.component';
import { RowComponent } from './row/row.component';

@NgModule({
  declarations: [
    ContainerComponent,
    ContainerFullComponent,
    RowComponent,
    ColumnComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ContainerComponent,
    ContainerFullComponent,
    RowComponent,
    ColumnComponent
  ]
})
export class GridModule {}
