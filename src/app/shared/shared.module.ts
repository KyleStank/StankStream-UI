import { NgModule } from '@angular/core';
import { AppMatModule } from './app-mat.module';
import { NavComponent } from './components/nav/nav.component';

@NgModule({
  declarations: [
    NavComponent
  ],
  imports: [
    AppMatModule
  ],
  exports: [
    AppMatModule,
    NavComponent
  ]
})
export class SharedModule {}
