
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { YouTubePlayerComponent } from "./youtube-player.component";

@NgModule({
	declarations: [
		YouTubePlayerComponent
	],
	imports: [
		BrowserModule
	],
	exports: [
		YouTubePlayerComponent
	],
	providers: [

	],
	bootstrap: [
		YouTubePlayerComponent
	]
})
export class YouTubePlayerModule { }
