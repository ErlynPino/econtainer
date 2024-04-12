import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs';
import { map } from 'rxjs/operators';
import { HeroesResponse } from '../interfaces/heroe.interface';
import { HeroDetails } from '../interfaces/heroDetail';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  private URL = 'https://akabab.github.io/superhero-api/api';
  private URLDetail = 'https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api'

  constructor(private http: HttpClient) { }

  getSuperheroes(): Observable<HeroesResponse[]> { 
    return this.http.get<HeroesResponse[]>(`${this.URL}/all.json`);
  }

  searchSuperheroes(query: string): Observable<HeroesResponse[]> {
    return this.getSuperheroes().pipe(
      map(superheroes => superheroes.filter(hero =>
        hero.name.toLowerCase().includes(query.toLowerCase())
      ))
    );
  }

  getHeroDetails(id: number): Observable<HeroDetails> {
    const url = `${this.URLDetail}/id/${id}.json`;
    return this.http.get<HeroDetails>(url);
  }

}
