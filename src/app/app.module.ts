import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreLogMonitorModule, useLogMonitor } from '@ngrx/store-log-monitor';

import { AppComponent } from './app.component';

import { store } from './store';
import { firebaseEffects, firebaseModule } from './firebase';
import { LoginComponent } from './login/login.component';

export function instrumentOptions() {
  return {
    monitor: useLogMonitor({  visible: true, position: 'right' })
  };
}

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    StoreDevtoolsModule.instrumentStore(instrumentOptions),
    StoreLogMonitorModule,
    firebaseModule,
    firebaseEffects,
    store,
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
