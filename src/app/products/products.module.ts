
import { NgModule } from "@angular/core";
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
