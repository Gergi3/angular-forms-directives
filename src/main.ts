import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { createMyWindowValueProvider } from './providers';

if (environment.production) {
  enableProdMode();
}

let windowValue = (window as any).myWindowValue as string;
let DOMProviders = [
  createMyWindowValueProvider(windowValue)
];

platformBrowserDynamic(DOMProviders).bootstrapModule(AppModule)
  .catch(err => console.error(err));
