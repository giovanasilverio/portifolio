import { Component, signal } from '@angular/core';
import { IExperiences } from '../../interface/IExperiences.interface';

@Component({
  selector: 'app-experiences',
  templateUrl: './experiences.component.html',
  styleUrl: './experiences.component.scss'
})
export class ExperiencesComponent {
  public arrayExperiences = signal<IExperiences[]>([
    {
      summary: {
        strong: 'Teste',
        p: 'Texto de exemplo',
      },
      text: 'Texto do artigo',
    },
    {
      summary: {
        strong: 'Teste',
        p: 'Texto de exemplo',
      },
      text: 'Texto do artigo',
    },
    {
      summary: {
        strong: 'Teste',
        p: 'Texto de exemplo',
      },
      text: 'Texto do artigo',
    },
  ]);

  //Função de trackBy para otimizar o *ngFor
  trackByFn(index: number, item: IExperiences): number {
    return index; // ou item.id se você tiver um identificador único
  }
}
