import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  isProjectsVisible = false;
  loadError = false;

  ngOnInit(): void {
    // Simula carregamento com possível erro
    setTimeout(() => {
      try {
        // Substitua por lógica real de carregamento
        this.isProjectsVisible = true;
        // Se quiser simular erro, comente a linha acima e descomente abaixo:
        // throw new Error('Erro simulado');
      } catch (error) {
        this.loadError = true;
      }
    }, 2000); // simula 2 segundos de carregamento
  }
}
