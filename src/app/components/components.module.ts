// Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesModule } from './home/pages/pages.module';

// Components
import { HomeComponent } from './home/home.component';

// Material


@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    PagesModule,
    // Material
  ],
  exports: [HomeComponent],
})
export class ComponentsModule {}
