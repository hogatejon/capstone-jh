import { Injectable } from '@angular/core';

import { Message } from './Message';

import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MessageService {

  message$: BehaviorSubject<Message> = new BehaviorSubject<Message>(null);

  constructor() { }

  showMessage(header: string, message: string, severity: string, timeout: number = 5000) {
    const newMessage = new Message(header, message, severity, timeout);
    this.message$.next(newMessage);
  }
}
