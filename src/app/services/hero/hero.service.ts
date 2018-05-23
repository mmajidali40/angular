import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { of } from 'rxjs/observable/of';
import { HEROES } from './../../data/mock-heroes';
import { Hero } from '../../classes/hero';

import { MessagesService } from './../../services/messages/messages.service'

@Injectable()
export class HeroService {

  constructor(private messagesService: MessagesService) { }

  getHeroes (): Observable <Hero[]> {
    this.messagesService.Add('Hero-Service: fetch heroes');
    return of(HEROES);
  }
}
