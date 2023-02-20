import { Component } from '@angular/core';

import { Observable } from 'rxjs';
import { SharingService } from 'src/app/core/services/sharing-service/sharing.service';
import { Project } from 'src/app/interfaces/project-interface';

@Component({
  selector: 'app-item-project',
  templateUrl: './item-project.component.html',
  styleUrls: ['./item-project.component.scss']
})
export class ItemProjectComponent {

  projects$ : Observable<[Project]>;


  constructor(sharingService: SharingService){
    this.projects$ = sharingService.sharingProjectObservable;
  }


  openNewWindow( link: string) :void {
    window.open(link, '_blank');
  }
}
