import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';

import { chatRoutes } from './chat.routes';
import { ChatToolbarComponent } from './chat-toolbar.component';
import { ChatComponent } from './chat.component';
import { ChatRoomsListComponent } from './chat-rooms-list.component';


@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    chatRoutes
  ],
  declarations: [
    ChatComponent,
    ChatToolbarComponent,
    ChatRoomsListComponent
  ],
  providers: [
  ]
})
export class ChatModule {
}
