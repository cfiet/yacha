import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import 'hammerjs';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .then(() => {
    document.body.classList.remove('loading', 'overlay');
  })
  .catch(err => {
    document.body.classList.remove('loading');
    document.body.classList.add('failed');
    throw err;
  });
