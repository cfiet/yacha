import { Component,
         ChangeDetectionStrategy,
         Input,
         Output,
         EventEmitter
       } from '@angular/core';

import { User, Action, logout } from '../store';

@Component({
  selector: 'app-chat-toolbar',
  template: `
    <md-toolbar color="primary">
      <span class="title">Yacha</span>

      <span class="fill"></span>

      <button md-icon-button (click)="logout"
        title="Sign off"
        [ngStyle]="{
          'background-image': 'url(' + user.photoURL + ')',
          'background-size': 'cover'
        }"
      >
      </button>
    </md-toolbar>
  `,
  styles: [`
    .fill { 
      flex: 1 1 auto;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChatToolbarComponent {
  @Input()
  user: User;

  @Output()
  action: EventEmitter<Action> = new EventEmitter<Action>();

  logout(): void {
    this.action.emit(logout());
  }
}