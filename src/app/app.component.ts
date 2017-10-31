import { scale } from './shared/animations';
import { HeroesService } from './services/hero.service';
import { Hero } from './shared/hero';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  /*animations lo que recibe es un array de datos */
  animations: [scale]
})
export class AppComponent implements OnInit {
  title = 'app';
  heroes: Hero[] = [];
  selectedHero: Hero = null;
  constructor(private heroesService: HeroesService) {}

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroesService.getHeroes()
      .then(heroes => this.heroes = heroes);
  }

  updateSelectedHero(hero: Hero ): void {
    this.selectedHero = hero;
  }

  toggleState(hero: Hero) {
    hero.state = (hero.state === 'active' ? 'inactive' : 'active');
    this.updateSelectedHero(hero);
  }
}
