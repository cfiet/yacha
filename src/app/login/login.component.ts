import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { Map } from 'immutable';
import { Observable } from 'rxjs/Observable';

import { Action, LoginState, loginStart, logout } from '../store';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent {
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
