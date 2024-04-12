import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { HeroesResponse } from '../../interfaces/heroe.interface';

@Component({
  selector: 'app-heroe-poster',
  templateUrl: './heroe-poster.component.html',
  styleUrls: ['./heroe-poster.component.css']
})
export class HeroePosterComponent implements OnInit {
  searchQuery: string = '';
  filteredSuperheroes: HeroesResponse[] = [];
  originalSuperheroes: HeroesResponse[] = [];
  showNoResultsMessage: boolean = false;

  constructor(private heroesService: HeroesService) { }

  ngOnInit(): void {
    this.getSuperheroes();
  }

  getSuperheroes(): void {
    this.heroesService.getSuperheroes().subscribe(
      (data: HeroesResponse[]) => {
        this.filteredSuperheroes = data.slice(0, 20);
        this.originalSuperheroes = data.slice(0, 20); // Guardar la lista original
        this.searchQuery = ''; // Limpiar el campo de búsqueda
      },
      (error) => {
        console.error('Error al obtener los superhéroes:', error);
      }
    );
  }

  searchSuperheroes(): void {
    // Realizar la búsqueda solo si hay algo escrito en el campo de búsqueda
    if (this.searchQuery.trim()) {
      this.filteredSuperheroes = this.originalSuperheroes.filter(hero =>
        hero.name.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    } else {
      // Restablecer la lista original si el campo de búsqueda está vacío
      this.filteredSuperheroes = this.originalSuperheroes.slice();
    }

    // Mostrar mensaje si no hay resultados
    this.showNoResultsMessage = this.filteredSuperheroes.length === 0;

    // Restablecer la lista original después de 3 segundos si no hay resultados
    if (this.showNoResultsMessage) {
      setTimeout(() => {
        this.filteredSuperheroes = this.originalSuperheroes.slice();
        this.showNoResultsMessage = false;
        this.searchQuery = ''; // Limpiar el campo de búsqueda
      }, 3000);
    }
  }
}
