import { Component, OnInit } from '@angular/core';
import { Map } from 'immutable';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/timer';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/toPromise';
import { Store, User, LoginAction } from '../store';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  isLoggingIn = false;
  currentUser: Observable<User>;

  constructor(private store: Store<Map<string, any>>) {
    this.currentUser = store.select<User>('currentUser');
  }

  login(): void {
    this.isLoggingIn = true;
    Observable.timer(1000).take(1).do(() => {
      this.store.dispatch(new LoginAction({
        id: 'qwerty',
        name: 'User McUserface'
      }))
    }).toPromise().then(() => {
      this.isLoggingIn = false;
    });
  }
}
