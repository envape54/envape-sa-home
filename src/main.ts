
import { enableProdMode } from "@angular/core";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";

import { AppModule } from "./app/app.module";
import { environment } from "./environments/environment";

import * as fbConfig from "firebase.config";

if (environment.production)
	enableProdMode();

platformBrowserDynamic().bootstrapModule(AppModule);

// Initialise firebase after all other loading and processing
fbConfig.initApp();

console.log("all loaded!");
