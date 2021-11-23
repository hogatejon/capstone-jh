import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { Message } from './Message';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {

  @Input() message: Message
  @Output() closeMessage = new EventEmitter<boolean>();
  messageStyle: string;

  constructor() { }

  ngOnInit(): void {
    this.setSeverity();
  }

  setSeverity() {
    switch (this.message.severity) {
      case 'error':
        this.messageStyle = 'error';
        break;
      case 'success':
        this.messageStyle = 'success';
        break;
      case 'warn':
        this.messageStyle = 'warn';
        break;
      default:
        this.messageStyle = 'success';
        break;
    }
  }

  onClose() {
    this.closeMessage.emit(true);
  }

}
