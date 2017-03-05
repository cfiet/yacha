import { Component,
         ChangeDetectionStrategy,
         Input,
         Output,
         EventEmitter,
         OnInit,
         trigger,
         animate,
         style,
         state,
         transition,
         keyframes
       } from '@angular/core';

import { FormGroup,
         FormControl,
         Validators,
       } from '@angular/forms';
import { RoomHeader, Action, createRoom } from '../store';

type NewRoomState = 'closed' | 'open' | 'closing';

@Component({
  selector: 'app-chat-rooms-list',
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('slide', [
      state('void', style({ width: '0%' })),
      state('*', style({ width: '100%' })),
      transition(':enter', animate('200ms ease-in')),
      transition(':leave', animate('200ms ease-in'))
    ]),
    trigger('fade', [
      state('void', style({ opacity: '0' })),
      state('*', style({ opacity: '1' })),
      transition(':enter', animate('200ms ease-in')),
      transition(':leave', animate('200ms ease-in'))
    ])
  ],
  template: `
    <md-nav-list>
      <md-list-item (click)="startNewRoom()" [formGroup]="newRoomForm">
        <md-icon md-list-icon>add</md-icon>

        <div md-line *ngIf="newRoom === 'closed'">
          Create new room
        </div>

        <div md-line *ngIf="newRoom === 'open'" @slide>
          <md-input-container style="width: 80%;">
            <input mdInput type="text" placeholder="Room name" formControlName="roomName" />
          </md-input-container>
          <md-checkbox style="width: 20%; align: right;" formControlName="isPublic">
            Public
          </md-checkbox>
        </div>
        <button class="new-room-button" type="submit" md-raised-button color="primary"
          *ngIf="newRoom === 'open'"
          [disabled]="newRoomForm.invalid"
          (click)="completeNewRoom($event)"
          @fade
        >
          Create
        </button>
        <button class="new-room-button" md-button color="warn"
          *ngIf="newRoom === 'open'"
          (click)="cancelNewRoomStart($event)"
          @fade
        >
          Cancel
        </button>
      </md-list-item>
      <md-list-item *ngFor="let r of rooms;">
        <p md-line>{{r.title}}</p>
      </md-list-item>
    </md-nav-list>
  `,
  styles: [`
    :host {
      display: block;
    }

    md-list-item {
      background-color: rgb(255, 255, 255);
    }

    .input-fill {
      width: auto;
    }

    .new-room-button {
      margin-left: 15px;
    }
  `]
})
export class ChatRoomsListComponent implements OnInit {
  @Input()
  rooms: RoomHeader[];

  @Output()
  action: EventEmitter<Action> = new EventEmitter<Action>();

  newRoom: NewRoomState = 'closed';
  newRoomForm: FormGroup;


  ngOnInit() {
    this.newRoomForm = new FormGroup({
      roomName: new FormControl('', [Validators.required]),
      isPublic: new FormControl(false)
    });
  }

  startNewRoom(): void {
    this.newRoom = 'open';
  }

  completeNewRoom(event: Event): void {
    event.stopPropagation();
    this.action.emit(createRoom(
      this.newRoomForm.value.roomName,
      this.newRoomForm.value.isPublic
    ));
    this.newRoomForm.reset();
    this.newRoom = 'closing';
  }

  cancelNewRoomStart(event: Event): void {
    event.stopPropagation();
    this.newRoom = 'closing';
  }

  cancelNewRoomDone(): void {
    if (this.newRoom === 'closing') {
      this.newRoom = 'closed';
    }
  }
}
