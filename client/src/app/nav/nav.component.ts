import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { User } from '../models/user.interface';
import { MessageService } from '../shared/components/message/message.service';
import { LoginService } from '../shared/services/login.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  @Input() user: User;

  constructor(private readonly loginService: LoginService,
              private readonly router: Router,
              private readonly messageService: MessageService) { }

  ngOnInit(): void {
  }

  logout() {
    this.loginService.userResponse$.next(null);
    this.router.navigate(['/login']);
    this.messageService.showMessage('Success', 'You have successfully logged out!', 'success');
  }

}
