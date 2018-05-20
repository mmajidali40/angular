import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { of } from 'rxjs/observable/of';
import { HEROES } from './../data/mock-heroes';
import { Hero } from '../classes/hero';

@Injectable()
export class HeroService {

  constructor() { }

  getHeroes (): Observable <Hero[]> {
    return of(HEROES);
  }
}
