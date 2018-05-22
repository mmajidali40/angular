import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { of } from 'rxjs/observable/of';
import { HEROES } from './../data/mock-heroes';
import { Hero } from '../classes/hero';
import { MessageService } from './message.service';

@Injectable()
export class HeroService {

  constructor(private messageService: MessageService) { }

  getHeroes (): Observable <Hero[]> {
    this.messageService.Add('HeroService: fetch heroes');
    return of(HEROES);
  }
}
