import { Component } from '@angular/core';

@Component({
  selector: 'app-item-project',
  templateUrl: './item-project.component.html',
  styleUrls: ['./item-project.component.scss']
})
export class ItemProjectComponent {


  openNewWindow( link: string) :void {
    window.open(link, '_blank');
  }
}
