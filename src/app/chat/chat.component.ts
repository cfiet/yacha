import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store, AppState, loadRooms, User, RoomHeader } from '../store';

@Component({
  selector: 'app-rooms',
  template: `
    <app-chat-toolbar [user]="user$ | async" (action)="store.dispatch($event)"></app-chat-toolbar>

    <md-spinner *ngIf="loadingRooms$ | async"></md-spinner>

    <app-chat-rooms-list *ngIf="!(loadingRooms$ | async)" [rooms]="rooms$ | async" (action)="store.dispatch($event)">
    </app-chat-rooms-list>
  `,
  styles: [`
    :host {
      display: block;
      width: 100vw;
      height: 100vh;
    }

    md-spinner {
      margin-top: 50px;
      margin-left: auto;
      margin-right: auto;
    }
  `]
})
export class ChatComponent {
  public user$: Observable<User>;
  public loadingRooms$: Observable<boolean>;
  public rooms$: Observable<RoomHeader[]>;

  constructor(public store: Store<AppState>) {
    this.store.dispatch(loadRooms());

    this.user$ = this.store.select(s => s.login).map(l => l.user);

    this.loadingRooms$ = this.store.select(s => s.rooms).map(r => r.loading);

    this.rooms$ = this.store.select(s => s.rooms).map(r => r.rooms);
  }
}
