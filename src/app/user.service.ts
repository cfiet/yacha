import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/filter';
import 'rxjs/add/observable/of';

import { AppState, User } from './store';

@Injectable()
export class UserService {
  public currentUser: Observable<User>;

  constructor(private store: Store<AppState>) {
    this.currentUser = store.select(s =>
      s.currentUser
    ).filter(id =>
      id !== undefined
    ).switchMap(userId =>
      userId === null
        ? Observable.of(null)
        : store.select(s =>
            s.users
          )
          .map(u =>
            u[userId]
          )
    );
  }
}