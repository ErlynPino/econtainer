import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { HeroesResponse } from '../../interfaces/heroe.interface';


@Component({
  selector: 'app-heroe-poster',
  templateUrl: './heroe-poster.component.html',
  styleUrl: './heroe-poster.component.css'
})
export class HeroePosterComponent implements OnInit{

  superheroes: HeroesResponse[] = [];

  constructor(private heroesService:HeroesService ) {}

  ngOnInit(): void {
    this.getSuperheroes();
  }

  getSuperheroes(): void {
    this.heroesService.getSuperheroes().subscribe(
      (data: HeroesResponse[]) => {
        this.superheroes = data.slice(0, 20);
      },
      (error) => {
        console.error('Error al obtener los superhéroes:', error);
      }
    );
  }
}

