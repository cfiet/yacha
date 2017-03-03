import { EffectsModule } from '@ngrx/effects';
import { FirebaseAppConfig, AuthMethods, AuthProviders } from 'angularfire2';
import { AngularFireModule } from 'angularfire2';
import { AuthConfiguration } from 'angularfire2/auth';

import { FirebaseEffects } from './effects';

const appConfig: FirebaseAppConfig = {
  apiKey: 'AIzaSyDhUQeQ021xBMX-hK-R0kth92ExL33ztpU',
  authDomain: 'game-of-giff.firebaseapp.com',
  databaseURL: 'https://game-of-giff.firebaseio.com',
  storageBucket: 'game-of-giff.appspot.com',
  messagingSenderId: '211117234885'
};

const authConfig: AuthConfiguration = {
  provider: AuthProviders.Google,
  method: AuthMethods.Redirect
};

export const firebaseModule = AngularFireModule.initializeApp(appConfig, authConfig);

export const firebaseEffects = EffectsModule.runAfterBootstrap(FirebaseEffects);