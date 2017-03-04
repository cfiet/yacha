import { Routes, RouterModule } from '@angular/router';
import { IsAuthenticatedGuard } from './login';

import { RoomsComponent } from './rooms';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: 'app/login/login.module#LoginModule'
  },
  {
    path: 'rooms',
    component: RoomsComponent,
    canActivate: [IsAuthenticatedGuard],
    canActivateChild: [IsAuthenticatedGuard]
  },
  {
    path: '**',
    redirectTo: 'rooms'
  }
];

export const appRoutes = RouterModule.forRoot(routes);
