import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { of } from 'rxjs/observable/of';
import { HEROES } from './../../data/mock-heroes';
import { Hero } from '../../classes/hero';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { MessagesService } from './../../services/messages/messages.service'

@Injectable()
export class HeroService {
  private heroesUrl = '/api/heroes'; 
  constructor(private messagesService: MessagesService,
              private http: HttpClient) { }

  getHeroes (): Observable <Hero[]> {
    this.messagesService.Add('Hero-Service: fetch heroes');
    return this.http.get<Hero[]>(this.heroesUrl);
  }
  getHero(id: number): Observable<Hero> {
    this.messagesService.Add(`Hero-Service: fetch hero id:${id}`);
    return of(HEROES.find(hero => hero.id === id));
  }

}
