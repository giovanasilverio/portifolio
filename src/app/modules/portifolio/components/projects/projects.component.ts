import { Component, signal } from '@angular/core';
import { IProjects } from '../../interface/IProjects.interface';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  public arrayProjects = signal<IProjects[]>([
    {
      src: 'assets/img/projects/vfull.png',
      alt: 'Projeto VFull',
      title: 'VFull',
      width: '100px',
      height: '51px',
      description:'',
      links: [
        {
          name: 'Ver Projeto',
          href: 'https://exemplo.com/projeto-vfull'
        }
      ]
    }

    ]);

}
