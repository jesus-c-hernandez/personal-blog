import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';

// Material



@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule,
    // Material
  ],
  exports: [
    HeaderComponent
  ]
})
export class ComponentsModule { }
