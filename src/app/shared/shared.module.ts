import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ItemProjectComponent } from './item-project/item-project.component';



@NgModule({
  declarations: [ItemProjectComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [ItemProjectComponent, ]
})
export class SharedModule { }
