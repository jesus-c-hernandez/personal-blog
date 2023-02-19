import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { ProjectsComponent } from './projects/projects.component';
import { SharedModule } from '../shared/item-project/shared.module';

// Material

@NgModule({
  declarations: [HeaderComponent, ProjectsComponent],
  imports: [
    CommonModule,
    SharedModule
    // Material
  ],
  exports: [HeaderComponent, ProjectsComponent],
})
export class ComponentsModule {}
