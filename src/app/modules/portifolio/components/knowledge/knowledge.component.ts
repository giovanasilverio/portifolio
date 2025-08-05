import { Component, signal, Signal } from '@angular/core';

@Component({
  selector: 'app-knowledge',
  templateUrl: './knowledge.component.html',
  styleUrl: './knowledge.component.scss'
})
export class KnowledgeComponent {
    public arrayKnowledge = signal([
        {
            src: 'assets/icons/knowledge/html5.svg',
            alt: 'HTML5',
        },
        {
            src: 'assets/icons/knowledge/html5.svg',
            alt: 'HTML5',
        },
        {
            src: 'assets/icons/knowledge/css3.svg',
            alt: 'CSS3',
        },
        {
            src: 'assets/icons/knowledge/javascript.svg',
            alt: 'JavaScript',
        },
        {
            src: 'assets/icons/knowledge/angular.svg',
            alt: 'Angular',
        },
        {
            src: 'assets/icons/knowledge/sass.svg',
            alt: 'Sass',
        },
    ])

}
