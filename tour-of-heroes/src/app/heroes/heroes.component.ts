import {Component} from '@angular/core';
import {NgFor, NgIf, UpperCasePipe} from "@angular/common";
import {Hero} from "../hero";
import {HeroDetailComponent} from "../hero-detail/hero-detail.component";
import {FormsModule} from "@angular/forms";
import {HeroService} from "../hero.service";
import {MessageService} from "../message.service";


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent {

  constructor(private heroService: HeroService,
              private messageService: MessageService) {
  }

  ngOnInit(): void {
    this.getHeroes();
  }

  heroes: Hero[] = [];

  selectedHero !: Hero;
  onSelect(hero: Hero) {
    this.selectedHero = hero;
    this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`);
  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }
}
