import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { LoginRequest } from 'src/app/models/login-request.interface';
import { User } from 'src/app/models/user.interface';

import { BehaviorSubject } from 'rxjs';
import { MessageService } from '../shared/components/message/message.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private requestLoginUrl = 'http://localhost:8082/api/login';
  private userNameAvailableUrl = 'http://localhost:8082/api/username_available/';
  private addUserUrl = 'http://localhost:8082/api/users';

  userResponse$: BehaviorSubject<User> = new BehaviorSubject<User>(null);

  constructor(private readonly http: HttpClient,
              private readonly messageService: MessageService) { }

  requestLogin(loginRequest: LoginRequest) {
    this.http.post(this.requestLoginUrl, loginRequest).subscribe((response: User) => {
      this.userResponse$.next(response);
    },
    (err) => { this.userResponse$.next(err) });
  }

  registerUser(registerRequest: LoginRequest) {
    this.http.get(this.userNameAvailableUrl + registerRequest.username, { responseType: 'text'}).subscribe((response) => {
      if (response.toString() === 'YES') {
        this.http.post(this.addUserUrl, registerRequest).subscribe((res) => {
          this.messageService.showMessage('Success!', 'You have registered a new User!', 'success');
          this.requestLogin({
            username: registerRequest.username,
            password: registerRequest.password
          });
        });
      } else {
        this.messageService.showMessage('Error', 'Username is taken', 'error');
      }
    });
  }
}
