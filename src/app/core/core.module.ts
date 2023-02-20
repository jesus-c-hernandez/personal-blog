import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharingService } from './services/sharing-service/sharing.service';
import { FilesService } from './services/files-service/files.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [SharingService, FilesService]
})
export class CoreModule { }
