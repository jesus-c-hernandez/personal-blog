import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {

  emailCopied : boolean = false;

  openNewWindow( link: string) :void {
    window.open(link, '_blank');
  }

  copyToClipboard() {
    navigator.clipboard.writeText('jesus.castaneda.hdez@gmail.com');
    this.emailCopied = true;
  }

}
