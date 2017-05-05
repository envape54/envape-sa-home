
import { Component, OnInit } from "@angular/core";
import { DomSanitizer, SafeResourceUrl } from "@angular/platform-browser";

import { PlayerOptions } from "./youtube.api";

@Component({
	selector: "envp-youtube-player",
	templateUrl: "./youtube-player.component.html",
	styleUrls: [ "./youtube-player.component.scss" ],
	inputs: [ "videoId" ]
})
export class YouTubePlayerComponent {
	public videoId: string;

	private get url(): SafeResourceUrl {
		let url: string = "";

		if (this.videoId)
			url = `https://www.youtube.com/embed/${ this.videoId }`;

		return this.sanitizer.bypassSecurityTrustResourceUrl(url);
	}

	constructor(private sanitizer: DomSanitizer) { }
}
