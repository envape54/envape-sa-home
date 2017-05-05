
import { , OnInit } from "@angular/core";

import * as $ from "jquery";

@Component({
	selector: "envp-home",
	templateUrl: "./home.component.html",
	styleUrls: [ "./home.component.scss" ]
})
export class HomeComponent implements OnInit {
	private videoId: string = "Wl1XIqbAhdo";

	constructor() {
		$(window).scroll(() => $(".videoOverlay").css("opacity", $(window).scrollTop() / 650));
		$(window).on("YTReady", (event: any) => event.target.mute());
	}

	public ngOnInit() {

	}
}
