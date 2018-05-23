import { Injectable } from '@angular/core';

@Injectable()
export class MessagesService {

  messages: string[] = [];
  constructor() { }

  Add(message: string): void {
    this.messages.push(message);
  }
  Clear(): void {
    this.messages = [];
  }
}
