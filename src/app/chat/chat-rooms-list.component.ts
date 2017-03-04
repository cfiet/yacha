import { Component,
         ChangeDetectionStrategy,
         Input,
         Output,
         EventEmitter
       } from '@angular/core';
import { RoomHeader, Action } from '../store';

@Component({
  selector: 'app-chat-rooms-list',
  template: `
    {{rooms | json}}
  `,
  styles: [`
    :host {
      display: block;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChatRoomsListComponent {
  @Input()
  rooms: RoomHeader[];

  @Output()
  action: EventEmitter<Action> = new EventEmitter<Action>();
}