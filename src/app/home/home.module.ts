
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { YouTubePlayerModule } from "../shared/modules/youtube-player/youtube-player.module";
import { HomeComponent } from "./home.component";

const HomeRoutes: Routes = [
	{
		path: "",
		component: HomeComponent
	}
];

@NgModule({
	declarations: [
		HomeComponent
	],
	imports: [
		YouTubePlayerModule,
		RouterModule.forRoot(HomeRoutes)
	],
	providers: [

	],
	bootstrap: [
		HomeComponent
	]
})
export class HomeModule { }
