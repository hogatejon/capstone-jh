import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.scss']
})
export class ConfirmationComponent {

  @Input() panelHeader: string;
  @Input() message: string;
  @Output() resolve = new EventEmitter<boolean>();

  constructor() { }

  onResolve() {
    this.resolve.emit(true)
  }

  onReject() {
    this.resolve.emit(false);
  }

}
