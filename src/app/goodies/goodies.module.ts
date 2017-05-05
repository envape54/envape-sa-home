
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";

import { GoodiesComponent } from "./goodies.component";
import { GoodiesService } from "../shared/services";

const GoodyRoutes: Routes = [
	{
		path: "goodies",
		component: GoodiesComponent
	},
	{
		path: "goodies/:category",
		component: GoodiesComponent
	}
];

@NgModule({
	imports: [
		CommonModule,
		RouterModule.forRoot(GoodyRoutes)
	],
	declarations: [
		GoodiesComponent
	],
	providers: [
		GoodiesService
	],
	bootstrap: [
		GoodiesComponent
	]
})
export class GoodiesModule { }
