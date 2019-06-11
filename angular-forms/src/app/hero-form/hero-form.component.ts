import { Component } from '@angular/core';

import { Hero } from '../hero';

@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.css']
})
export class HeroFormComponent {

  powers = ['Super Smart', 'Super Flexible',
    'Super Sweet', 'Invisibility', 'Flying'];

  model = new Hero(18, 'EQ IQ Master', this.powers[0], 'Einstein');

  submitted = false;

  onSubmit() { this.submitted = true; }

  newHero() {
    this.model = new Hero(42, '', '');
  }
}
