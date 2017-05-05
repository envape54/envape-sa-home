
import { Component, OnInit } from "@angular/core";

class Category {
	id: number;
	name: string;
	description: string;
}

@Component({
	selector: "envp-products",
	templateUrl: "./products.component.html",
	styleUrls: [ "./products.component.scss" ]
})
export class ProductsComponent implements OnInit {
	private categories: Category[] = [
		{ id: 1, name: "Oils", description: "The flavour" },
		{ id: 2, name: "Vapes", description: "The device" },
		{ id: 3, name: "Cases", description: "The protector" }
	];

	constructor() { }

	ngOnInit() {
	}
}
