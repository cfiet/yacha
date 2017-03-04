import { Component, OnChanges, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { Map } from 'immutable';
import { Observable } from 'rxjs/Observable';

import { Action, LoginState, loginStart, logout } from '../store';

type LoginComponentState = 'checking' | 'logged-out' | 'logged-in' | 'failed';
function getComponentState(login: LoginState): LoginComponentState {
  if (login.checking) {
    return 'checking';
  }

  if (login.failReason) {
    return 'failed';
  }

  if (login.user) {
    return 'logged-in';
  }

  return 'logged-out';
}


@Component({
  selector: 'app-login-screen',
  templateUrl: './login-screen.component.html',
  styleUrls: ['./login-screen.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginScreenComponent implements OnChanges {
  @Input()
  login: LoginState;

  @Output()
  action: EventEmitter<Action> = new EventEmitter<Action>();

  state: LoginComponentState;

  startGoogleLogin(): void {
    this.action.emit(loginStart());
  }

  logout(): void {
    this.action.emit(logout());
  }

  ngOnChanges(): void {
    this.state = getComponentState(this.login);
  }
}
