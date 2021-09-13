import { Component } from '@angular/core';
import { MessageService } from './shared/message/message.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'fly-shop';
  showMessage: boolean = false;

  constructor(private readonly messageService: MessageService) { }


}


