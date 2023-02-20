import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { SharingService } from 'src/app/core/services/sharing-service/sharing.service';
import { TechSkill } from 'src/app/interfaces/tech-skill-interface';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent {

  techSkills$ : Observable<[TechSkill]>;
  learnTechSkills$ : Observable<[TechSkill]>;

  constructor(sharingService: SharingService) {
    this.techSkills$ = sharingService.sharingTechSkillObservable;
    this.learnTechSkills$ = sharingService.sharingLearnTechSkillObservable;
    console.log('this.techSkills$', this.techSkills$);
  }
}
