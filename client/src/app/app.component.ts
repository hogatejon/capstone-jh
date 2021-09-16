import { Component, OnInit } from '@angular/core';
import { trigger, style, animate, transition, state } from '@angular/animations';

import { Message } from './shared/components/message/Message';
import { MessageService } from './shared/components/message/message.service';
import { OrganizationService } from './shared/services/organization.service';
import { LoginService } from './shared/services/login.service';
import { User } from './models/user.interface';

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
  loggedIn: boolean = false;
  user: User;

  constructor(private readonly organizationService: OrganizationService,
              private readonly messageService: MessageService,
              private readonly loginService: LoginService) { }

  ngOnInit() {
    this.organizationService.getOrganizations();
    this.subscribeToToast();
    this.subscribeToLogInStatus();
  }

  closeMessage() {
    this.showMessage = false;
  }

  subscribeToLogInStatus() {
    this.loginService.userResponse$.subscribe((res) => {
      if (res?.id && res?.name && res?.username) {
        this.loggedIn = true;
        this.user = res;
      } else {
        this.loggedIn = false;
        this.user = null;
      }
    });
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


