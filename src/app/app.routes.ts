import { Routes, RouterModule } from '@angular/router';
import { IsAuthenticatedGuard } from './login';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: 'app/login/login.module#LoginModule'
  },
  {
    path: 'chat',
    loadChildren: 'app/chat/chat.module#ChatModule',
    canActivate: [IsAuthenticatedGuard],
    canActivateChild: [IsAuthenticatedGuard]
  },
  {
    path: '',
    redirectTo: '/chat',
    pathMatch: 'prefix'
  },
  {
    path: '**',
    redirectTo: '/chat',
    pathMatch: 'full'
  }
];

export const appRoutes = RouterModule.forRoot(routes, {
  useHash: true
});
