import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../services/heroes.service';
import { HeroDetails } from '../../interfaces/heroDetail';

@Component({
  selector: 'app-hero-details',
  templateUrl: './hero-details.component.html',
  styleUrls: ['./hero-details.component.css']
})
export class HeroDetailsComponent implements OnInit {
  heroDetails!: HeroDetails;

  constructor(
    private route: ActivatedRoute,
    private heroesService: HeroesService
  ) { }

  ngOnInit(): void {
    this.getHeroDetails();
  }

  getHeroDetails(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    if (id) {
      this.heroesService.getHeroDetails(id)
        .subscribe(heroDetails => this.heroDetails = heroDetails);
    } else {
      console.error('ID not found in URL parameter.');
    }
  }
}
