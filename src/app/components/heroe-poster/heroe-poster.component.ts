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
        const shuffledHeroes = this.shuffleArray(data);
        this.filteredSuperheroes = shuffledHeroes.slice(0, 20);
        this.originalSuperheroes = this.filteredSuperheroes.slice(); 
        this.searchQuery = '';
      },
      (error) => {
        console.error('Error al obtener los superhéroes:', error);
      }
    );
  }
  
  shuffleArray(array: any[]): any[] {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  searchSuperheroes(): void {
    
    if (this.searchQuery.trim()) {
      this.filteredSuperheroes = this.originalSuperheroes.filter(hero =>
        hero.name.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    } else {
      this.filteredSuperheroes = this.originalSuperheroes.slice();
    }
    
    this.showNoResultsMessage = this.filteredSuperheroes.length === 0;
    if (this.showNoResultsMessage) {
      setTimeout(() => {
        this.filteredSuperheroes = this.originalSuperheroes.slice();
        this.showNoResultsMessage = false;
        this.searchQuery = ''; 
      }, 3000);
    }
  }
}
