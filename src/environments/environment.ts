// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyBeJqRquGGuDBjaQurOmkwbaLJVroMPlJ4',
    authDomain: 'yacha-staging.firebaseapp.com',
    databaseURL: 'https://yacha-staging.firebaseio.com',
    storageBucket: 'yacha-staging.appspot.com',
    messagingSenderId: '443471707958',
    defaultAuthProvider: 3, // Google
    defaultAuthMethod: 1 // Redirect
  }
};
