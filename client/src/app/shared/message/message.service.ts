import { Injectable } from '@angular/core';
import { Message } from './Message';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor() { }

  showMessage(message: Message, severity: string) {
    const newMessage = new Message(message, severity);

  }

  hideMessage() {

  }
}
