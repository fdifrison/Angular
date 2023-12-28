import {Component} from '@angular/core';
import {NgFor, NgIf, UpperCasePipe} from "@angular/common";
import {Hero} from "../hero";
import {HEROES} from "../mock-heroes";
import {FormsModule} from "@angular/forms";


@Component({
  standalone: true,
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
  imports: [NgFor, NgIf, UpperCasePipe, FormsModule]
})
export class HeroesComponent {
  heroes = HEROES;
  protected readonly onselect = onselect;

  selectedHero ?: Hero;
  onSelect(hero: Hero) {
    this.selectedHero = hero;
  }
}
