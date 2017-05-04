
import { HostListener } from "@angular/core";
import * as $ from "jquery";

interface IPlayerOptions {
	autoPlay: boolean;
	autoHideControls: boolean;
	loopVideo: boolean;
	allowFullscreen: boolean;
	muteAudio: boolean;
	showControles: boolean;
	showVideoInfo: boolean;
	showYouTubeLogo: boolean;
	showCaptions: boolean;
	showAnnotations: boolean;
	showRelatedVideos: boolean;
}

export class PlayerOptions implements IPlayerOptions {
	autoPlay: boolean;
	autoHideControls: boolean;
	loopVideo: boolean;
	allowFullscreen: boolean;
	muteAudio: boolean;
	showControles: boolean;
	showVideoInfo: boolean;
	showYouTubeLogo: boolean;
	showCaptions: boolean;
	showAnnotations: boolean;
	showRelatedVideos: boolean;

	constructor() {
		this.autoPlay = false;
		this.autoHideControls = true;
		this.loopVideo = false;
		this.allowFullscreen = true;
		this.muteAudio = false;
		this.showControles = true;
		this.showVideoInfo = false;
		this.showYouTubeLogo = true;
		this.showCaptions = true;
		this.showAnnotations = true;
		this.showRelatedVideos = true;
	}
}

export class Player {
	private _yt: any;
	private _ytConfig: any;
	private _queue: { (): void }[]

	constructor(selector: string, playerOptions: PlayerOptions) {
		this.configureContext();
		this.loadWidget(selector);
	}

	private configureContext(): void {
		this._yt = window["YT"] = window["YT"] || {
			loading: 1,
			loaded: 0,
			ready: (callback: { (): void}): void => this.ready(callback),
			setConfig: (config: any): void => this.setConfig(config)
		};

		this._ytConfig = window["YTConfig"] = window["YTConfig"] || {
			host: "http://www.youtube.com"
		};

		this._queue = [];
	}

	private loadWidget(selector: string): void {

		var element: HTMLElement = <HTMLElement>$(selector);

		var a = document.createElement('script');
		a.type = 'text/javascript';
		a.id = 'www-widgetapi-script';
		a.src = 'https://s.ytimg.com/yts/jsbin/www-widgetapi-vflktVMi7/www-widgetapi.js';
		a.async = true;

		var b = document.getElementsByTagName('script')[0];
		b.parentNode.insertBefore(a, b);
	}

	private ready(callback: { (): void }): void {
		if (this._yt.loaded)
			callback();

		else
			this._queue.push(callback);
	}

	private setConfig(config: any): void {
		for (var property in config)
			if (config.hasOwnProperty(property))
				this._ytConfig[property] = config[property];
	}

	@HostListener("window:onYTReady")
	private ytReady(event: any): void {
		this._yt.loaded = 1;

		for (var index = 0; index < this._queue.length; index++)
			try {
				this._queue[index]();
			}
			catch (queueError) {
				console.error("Could not process queue.", queueError);
			}
	}
}
