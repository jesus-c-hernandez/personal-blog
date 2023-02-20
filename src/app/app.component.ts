import { Component } from '@angular/core';
import { FilesService } from './core/services/files-service/files.service';
import { SharingService } from './core/services/sharing-service/sharing.service';
import { Project } from './interfaces/project-interface';
import { TechSkill } from './interfaces/tech-skill-interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'app-blog';

  constructor(fileService: FilesService, sharingService: SharingService) {
    // Get projects
    fileService.getProjects('../../assets/files/projects.json').subscribe( (data : [Project]) => {
      sharingService.sharingProjectObservableData = data;
    });
    // Get technical skills
    fileService.getTechSkills('../../assets/files/tech-skills.json').subscribe( (data : [TechSkill]) => {
      sharingService.sharingTechSkillObservableData = data;
    });
    // Get learn technical skills
    fileService.getTechSkills('../../assets/files/learn-tech-skills.json').subscribe( (data : [TechSkill]) => {
      sharingService.sharingLearnTechSkillObservableData = data;
    });
  }
}
