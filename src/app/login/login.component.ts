import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { Map } from 'immutable';
import { Observable } from 'rxjs/Observable';

import { Store, checkUser, AppState } from '../store';

@Component({
  selector: 'app-login',
  template: `
    <app-login-screen *ngIf="login$|async"
      [login]="login$|async"
      (action)="store.dispatch($event)"
    ></app-login-screen>
  `,
  styles: [`
    :host {
      display: box;
      width: 100vw;
      height: 100vh;
    }
  `]
})
export class LoginComponent {
  login$ = this.store.select(i => i.login);

  constructor(public store: Store<AppState>) {
    store.dispatch(checkUser());
  }
}
