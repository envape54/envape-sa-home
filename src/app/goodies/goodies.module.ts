
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";

import { GoodiesComponent } from "./goodies.component";

const GoodyRoutes: Routes = [
	{
		path: "goodies",
		component: GoodiesComponent
	}
]

@NgModule({
	imports: [
		CommonModule,
		RouterModule.forRoot(GoodyRoutes)
	],
	declarations: [
		GoodiesComponent
	],
	bootstrap: [
		GoodiesComponent
	]
})
export class GoodiesModule { }
