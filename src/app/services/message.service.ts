import { Injectable } from '@angular/core';

@Injectable()
export class MessageService {

  messages: string[];
  constructor() { 
    this.messages = [];
  }
  Add(message: string):void {
    this.messages.push(message);
  }
  Clear():void {
    this.messages = [];
  }
}
