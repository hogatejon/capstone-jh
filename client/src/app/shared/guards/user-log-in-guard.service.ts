import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { LoginService } from '../services/login.service';

@Injectable({
  providedIn: 'root'
})
export class UserLogInGuardService implements CanActivate {

  loggedIn: boolean = false;

  constructor(private readonly loginService: LoginService,
              private readonly router: Router) { }

  canActivate() {
    this.loginService.userResponse$.subscribe((res) => {
      if (res?.id && res?.name && res?.username) {
        this.loggedIn = true;
      } else {
        this.router.navigate(['/login']);
        this.loggedIn = false;
      }
    });
    return this.loggedIn;
  }
}
