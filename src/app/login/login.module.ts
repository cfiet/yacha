import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';

import { LoginScreenComponent } from './login-screen.component';
import { LoginComponent } from './login.component';
import { IsAuthenticatedGuard } from './is-authenticated.guard';
import { loginRoutes } from './login.routes';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    loginRoutes
  ],
  declarations: [
    LoginScreenComponent,
    LoginComponent
  ],
  providers: [
    IsAuthenticatedGuard
  ]
})
export class LoginModule {
}
