import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store, AppState, RoomsState, loadRooms } from '../store';

type RoomsComponentState = 'loading' | 'loaded' | 'failed';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent {

  public rooms$: Observable<RoomsState>;

  public state$: Observable<RoomsComponentState>;

  constructor(private store: Store<AppState>) {
    this.rooms$ = store.select(s => s.rooms);

    this.state$ = this.rooms$.map(s => {
      if (!s || s.loading) {
        return 'loading';
      }

      if (s.failReason) {
        return 'failed';
      }

      return 'loaded';
    });

    this.store.dispatch(loadRooms());
  }
}
