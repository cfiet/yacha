import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

import { AppState, checkUser } from './store';

@Component({
  selector: 'app-root',
  template: `
    <ngrx-store-log-monitor toggleCommand="ctrl-h" positionCommand="ctrl-m">
    </ngrx-store-log-monitor>

    <router-outlet></router-outlet>
  `,
  styles: [`
    :host {
      display: block;
      width: 100vw;
      height: 100vh;
    }

  `]
})
export class AppComponent {
  login$ = this.store.select(i => i.login);

  constructor(public store: Store<AppState>) { }
}
