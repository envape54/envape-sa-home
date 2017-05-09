
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params } from "@angular/router";
import { DomSanitizer } from "@angular/platform-browser";

import { Category } from "../shared/models";
import { GoodiesService } from "../shared/services";

@Component({
	selector: "envp-goodies",
	templateUrl: "./goodies.component.html",
	styleUrls: ["./goodies.component.scss"]
})
export class GoodiesComponent implements OnInit {
	private rowWidth: number = 3;
	private categorySet: Array<Array<Category>>;

	constructor(
		private goodiesService: GoodiesService,
		private domSanitizer: DomSanitizer,
		private route: ActivatedRoute) { }

	ngOnInit() {
		this.route.params.subscribe((parameters: Params) => {
			const category: string = parameters["category"];

			if (category)
				this.getGoodies(category);

			else
				this.getCategories();
		});
	}

	private getCategories(): void {
		this.goodiesService.getCategories()
			.map((categories: Category[]): Category[][] => {
				// Map the incoming 1D array to a 2D array, using
				// this.rowWidth to determine dimentions
				const categoryGrid: Array<Array<Category>> = [];
				const rows: number = Math.ceil(categories.length / this.rowWidth);

				for (let row: number = 0; row < rows; row++) {
					let categoryRow: Array<Category> = categories.slice(row * this.rowWidth, (row * this.rowWidth + this.rowWidth));

					categoryGrid.push(categoryRow);
				}

				return categoryGrid;
			})
			.subscribe((categories: Category[][]) => {
				this.categorySet = categories;
			});
	}

	private getGoodies(category: string): void {

	}
}
