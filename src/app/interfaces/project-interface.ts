export interface Project {
  name: string;
  description: string;
  technologies: [
    {
      name: string;
      img: string;
    }
  ];
  colaborators: [
    {
      name: string;
      profile: string;
    }
  ];
  repoProject: string;
  project: string;
}
