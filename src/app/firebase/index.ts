import { EffectsModule } from '@ngrx/effects';
import { FirebaseAppConfig, AuthMethods, AuthProviders } from 'angularfire2';
import { AngularFireModule } from 'angularfire2';
import { AuthConfiguration } from 'angularfire2/auth';

import { FirebaseEffects } from './effects';

import { environment } from '../../environments/environment';

const appConfig: FirebaseAppConfig = {
  apiKey: environment.firebase.apiKey,
  authDomain: environment.firebase.authDomain,
  databaseURL: environment.firebase.databaseURL,
  storageBucket: environment.firebase.storageBucket,
  messagingSenderId: environment.firebase.messagingSenderId
};

const authConfig: AuthConfiguration = {
  provider: environment.firebase.defaultAuthProvider,
  method: environment.firebase.defaultAuthMethod
};

export const firebaseModule = AngularFireModule.initializeApp(appConfig, authConfig);

export const firebaseEffects = EffectsModule.runAfterBootstrap(FirebaseEffects);