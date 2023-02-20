import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

import { Project } from 'src/app/interfaces/project-interface';
import { TechSkill } from 'src/app/interfaces/tech-skill-interface';

@Injectable({
  providedIn: 'root'
})
export class FilesService {

  constructor(private httpClient: HttpClient) { }

  getProjects( url: string ) : Observable<[Project]> {
    return this.httpClient.get<[Project]>(url);
  }

  getTechSkills( url: string ) : Observable<[TechSkill]> {
    return this.httpClient.get<[TechSkill]>(url);
  }

}
