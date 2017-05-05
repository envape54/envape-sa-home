
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";

import { SocialComponent } from "./social.component";

const SocialRoute: Routes = [
	{
		path: "social",
		component: SocialComponent
	}
]

@NgModule({
	imports: [
		CommonModule,
		RouterModule.forRoot(SocialRoute)
	],
	declarations: [
		SocialComponent
	],
	bootstrap: [
		SocialComponent
	]
})
export class SocialModule { }
