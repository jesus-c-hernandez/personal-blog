import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Project } from 'src/app/interfaces/project-interface';
import { TechSkill } from 'src/app/interfaces/tech-skill-interface';

@Injectable({
  providedIn: 'root',
})
export class SharingService {
  private sharingProjectObservablePrivate: BehaviorSubject<[Project]> =
    new BehaviorSubject<[Project]>([
      {
        name: '',
        description: '',
        technologies: [
          {
            name: '',
            img: '',
          },
        ],
        colaborators: [
          {
            name: '',
            profile: '',
          },
        ],
        repoProject: '',
        project: '',
      },
    ]);

  private sharingTechSkillObservablePrivate: BehaviorSubject<[TechSkill]> =
    new BehaviorSubject<[TechSkill]>([{ name: '', img: '' }]);

  private sharingLearnTechSkillObservablePrivate: BehaviorSubject<[TechSkill]> =
    new BehaviorSubject<[TechSkill]>([{ name: '', img: '' }]);

  // Getters & Setters

  get sharingProjectObservable() {
    return this.sharingProjectObservablePrivate.asObservable();
  }

  set sharingProjectObservableData(data: [Project]) {
    this.sharingProjectObservablePrivate.next(data);
  }

  get sharingTechSkillObservable() {
    return this.sharingTechSkillObservablePrivate.asObservable();
  }

  set sharingTechSkillObservableData(data: [TechSkill]) {
    this.sharingTechSkillObservablePrivate.next(data);
  }

  get sharingLearnTechSkillObservable() {
    return this.sharingLearnTechSkillObservablePrivate.asObservable();
  }

  set sharingLearnTechSkillObservableData(data: [TechSkill]) {
    this.sharingLearnTechSkillObservablePrivate.next(data);
  }
}
