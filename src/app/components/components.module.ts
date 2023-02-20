// Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

// Components
import { HeaderComponent } from './header/header.component';
import { ProjectsComponent } from './projects/projects.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { ContactComponent } from './contact/contact.component';

// Material


@NgModule({
  declarations: [HeaderComponent, ProjectsComponent, AboutMeComponent, ContactComponent],
  imports: [
    CommonModule,
    SharedModule,
    // Material
  ],
  exports: [HeaderComponent, ProjectsComponent, AboutMeComponent, ContactComponent],
})
export class ComponentsModule {}
