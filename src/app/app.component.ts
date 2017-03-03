import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

import { AppState, checkUser } from './store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  login$ = this.store.select(i => i.login);

  constructor(public store: Store<AppState>) {
    store.dispatch(checkUser());
  }
}
