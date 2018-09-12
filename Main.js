import {ResourceLoader} from './js/base/ResourceLoader.js';
import {BackGround} from './js/runtime/BackGround.js';
export class Main{
	constructor() {
		// console.log('我的游戏');
		// new ResourceLoader();
		this.canvas = document.getElementById('game_canvas');
		this.ctx = this.canvas.getContext('2d');
		const loader = ResourceLoader.create();
		loader.onLoaded(map => this.onResourceFirstLoaded(map));


	}
	onResourceFirstLoaded(map) {
		console.log(map);
		let background = new BackGround(this.ctx,map.get('background'));
		background.draw();
	}
}