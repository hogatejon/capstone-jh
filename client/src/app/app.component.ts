import { Component, OnInit } from '@angular/core';
import { Message } from './shared/components/message/Message';
import { MessageService } from './shared/components/message/message.service';
import { OrganizationService } from './shared/services/organization.service';
import { trigger, style, animate, transition, state } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger(
      'fade',
      [
        transition(
          ':leave',
          [
            style({ opacity: 1 }),
            animate('500ms ease-in',
                    style({ opacity: 0 }))
          ]
        )
      ]
    )
  ]
})
export class AppComponent implements OnInit {
  showMessage: boolean = false;
  message: Message;

  constructor(private readonly organizationService: OrganizationService,
              private readonly messageService: MessageService) { }

  ngOnInit() {
    this.organizationService.getOrganizations();
    this.subscribeToToast();
  }

  closeMessage() {
    this.showMessage = false;
  }

  subscribeToToast() {
    this.messageService.message$.subscribe(message => {
      if (message) {
        this.message = message;
        this.showMessage = true;
        setTimeout(() => {
          this.showMessage = false;
        }, message.timeout);
      } else {
        this.showMessage = false;
      }
    });
  }
}


