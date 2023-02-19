import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemProjectComponent } from './item-project.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [ItemProjectComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [ItemProjectComponent]
})
export class SharedModule { }
