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

  constructor() { }

  ngOnInit(): void {
  }

  onClose() {
    this.closeMessage.emit(true);
  }

}
