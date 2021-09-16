import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { MessageService } from '../shared/components/message/message.service';
import { LoginService } from '../shared/services/login.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit, OnDestroy {

  registerForm: FormGroup;
  ngDestroyed$ = new Subject();

  constructor(private readonly fb: FormBuilder,
              private readonly loginService: LoginService,
              private readonly messageService: MessageService,
              private readonly router: Router) { }

  ngOnInit(): void {
    this.buildRegisterForm();
    this.subscribeToUser();
  }

  ngOnDestroy() {
    this.ngDestroyed$.next();
  }

  buildRegisterForm() {
    this.registerForm = this.fb.group({
      name: [null, Validators.required],
      username: [null, Validators.required],
      password: [null, Validators.required]
    })
  }

  onSubmit() {
    if (this.registerForm.valid) {
      this.loginService.registerUser(this.registerForm.getRawValue());
    } else {
      this.registerForm.markAllAsTouched();
      this.messageService.showMessage('Error', 'Please provide values for all fields', 'error');
    }
  }

  routeToLogin() {
    this.router.navigate(['/login']);
  }

  subscribeToUser() {
    this.loginService.userResponse$.pipe(takeUntil(this.ngDestroyed$)).subscribe((user) => {
      if (user?.id && user?.name && user?.username) {
        this.router.navigate(['/home']);
      }
    });
  }

}
