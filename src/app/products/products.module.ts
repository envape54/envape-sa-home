
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";

import { ProductsComponent } from "./products.component";

const ProductRoutes: Routes = [
	{
		path: "products",
		component: ProductsComponent
	}
];

@NgModule({
	imports: [
		CommonModule,
		RouterModule.forRoot(ProductRoutes)
	],
	declarations: [
		ProductsComponent
	],
	providers: [

	],
	bootstrap: [
		ProductsComponent
	]
})
export class ProductsModule { }
