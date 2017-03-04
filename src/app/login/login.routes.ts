import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login.component';

const routes = [
  {
    path: '',
    component: LoginComponent
  }
];

export const loginRoutes = RouterModule.forChild(routes);