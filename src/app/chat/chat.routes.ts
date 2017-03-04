import { Routes, RouterModule } from '@angular/router';
import { ChatComponent } from './chat.component';

const routes = [
  {
    path: '',
    component: ChatComponent
  }
];

export const chatRoutes = RouterModule.forChild(routes);