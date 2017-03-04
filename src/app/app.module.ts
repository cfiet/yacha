import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreLogMonitorModule, useLogMonitor } from '@ngrx/store-log-monitor';
import { RouterStoreModule } from '@ngrx/router-store';

import { AppComponent } from './app.component';

import { store } from './store';
import { firebaseEffects, firebaseModule } from './firebase';
import { appRoutes } from './app.routes';
import { LoginModule } from './login';
import { RoomsComponent } from './rooms';

export function instrumentOptions() {
  return {
    monitor: useLogMonitor({  visible: true, position: 'right' })
  };
}

@NgModule({
  declarations: [
    AppComponent,
    RoomsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    LoginModule,
    StoreDevtoolsModule.instrumentStore(instrumentOptions),
    StoreLogMonitorModule,
    RouterStoreModule.connectRouter(),
    firebaseModule,
    firebaseEffects,
    store,
    appRoutes
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
