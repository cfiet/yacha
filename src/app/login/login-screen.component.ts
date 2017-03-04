import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { Map } from 'immutable';
import { Observable } from 'rxjs/Observable';

import { Action, LoginState, loginStart, logout } from '../store';

@Component({
  selector: 'app-login-screen',
  templateUrl: './login-screen.component.html',
  styleUrls: ['./login-screen.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginScreenComponent {
  @Input()
  login: LoginState;

  @Output()
  action: EventEmitter<Action> = new EventEmitter<Action>();

  startGoogleLogin(): void {
    this.action.emit(loginStart());
  }

  logout(): void {
    this.action.emit(logout());
  }
}
