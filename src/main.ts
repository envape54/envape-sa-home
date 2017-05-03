import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

import * as firebaseConfig from "firebase.config";

if (environment.production)
	enableProdMode();

platformBrowserDynamic().bootstrapModule(AppModule);

firebaseConfig.initApp();
