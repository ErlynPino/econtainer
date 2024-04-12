import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HeroesResponse } from '../interfaces/heroe.interface';


@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  private URL = 'https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/all.json';
  public cargando = false;

  constructor(private http: HttpClient) { }


  getSuperheroes(): Observable<HeroesResponse[]> { 
    return this.http.get<HeroesResponse[]>(this.URL);
  }
}
