import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { MessageService } from '../shared/components/message/message.service';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {

  loginForm: FormGroup;
  loginError: boolean = false;
  ngDestroyed$: Subject<boolean> = new Subject();

  constructor(private readonly fb: FormBuilder,
              private readonly messageService: MessageService,
              private readonly loginService: LoginService,
              private readonly router: Router) { }

  ngOnInit() {
    this.buildLoginForm();
    this.form();
  }

  ngOnDestroy() {
    this.ngDestroyed$.next();
  }

  buildLoginForm() {
    this.loginForm = this.fb.group({
      username: [null, Validators.required],
      password: [null, Validators.required]
    });
  }

  registerUser() {
    this.router.navigate(['/login/register']);
  }

  form() {
    this.loginForm.valueChanges.pipe(takeUntil(this.ngDestroyed$)).subscribe( () => {
      if (this.loginError) {
        this.loginError = false;
      }
    })
  }

  onSubmit() {
    if (this.loginForm.valid) {
      this.loginService.requestLogin(this.loginForm.getRawValue());
      this.loginService.userResponse$.pipe(takeUntil(this.ngDestroyed$)).subscribe((res) => {
        if (res?.id && res?.name && res?.username) {
          this.router.navigate(['/home']);
        } else {
          setTimeout(() => {
            this.loginError = true;
          }, 100);
        }
      });
    } else {
      this.loginForm.markAllAsTouched();
      this.messageService.showMessage('Error', 'Please provide values for all fields', 'error');
    }
  }
}
