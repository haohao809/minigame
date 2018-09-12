import {ResourceLoader} from './js/base/ResourceLoader.js';
import {Director} from './js/Director.js';
export class Main{
	constructor() {
		// console.log('我的游戏');
		// new ResourceLoader();
		this.canvas = document.getElementById('game_canvas');
		this.ctx = this.canvas.getContext('2d');
		const loader = ResourceLoader.create();
		loader.onLoaded(map => this.onResourceFirstLoaded(map))

		Director.getInstance(); 
	}
	onResourceFirstLoaded(map) {
		console.log(map)
	}
}