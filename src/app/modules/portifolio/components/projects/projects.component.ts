import { Component, inject, signal } from '@angular/core';
import { IProjects } from '../../interface/IProjects.interface';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import { EDialogPanelClass } from '../../enum/EDialogPanelClass.enum';
import { DialogProjectsComponent } from '../dialog/dialog-projects/dialog-projects.component';


@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  #dialog = inject(MatDialog);
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

    ])

    public openDialog(data: IProjects) {
      this.#dialog.open(DialogProjectsComponent, {
        data, 
        panelClass: EDialogPanelClass.PROJECTS,
      });
    }

}
