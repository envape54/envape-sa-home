
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { RouterModule, Routes } from "@angular/router";

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { AppComponent } from "./app.component";
import { HomeModule } from "./home/home.module";
import { GoodiesModule } from "./goodies/goodies.module";
import { SocialModule } from "./social/social.module";

@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		NgbModule.forRoot(),
		BrowserModule,
		FormsModule,
		HttpModule,
		RouterModule,
		HomeModule,
		GoodiesModule,
		SocialModule
	],
	providers: [

	],
	bootstrap: [
		AppComponent
	]
})
export class AppModule { }
