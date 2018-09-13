import {ResourceLoader} from './js/base/ResourceLoader.js';
import {BackGround} from './js/runtime/BackGround.js';
import {DataStore} from './js/base/DataStore.js';
import {Director} from './js/Director.js'
export class Main{
	constructor() {
		// console.log('我的游戏');
		// new ResourceLoader();
		this.canvas = document.getElementById('game_canvas');
		this.ctx = this.canvas.getContext('2d');
		this.dataStore = DataStore.getInstance();
		const loader = ResourceLoader.create();
		loader.onLoaded(map => this.onResourceFirstLoaded(map));


	}
	onResourceFirstLoaded(map) {
		console.log(map);
		this.dataStore.ctx = this.ctx;
		this.dataStore.res = map;
		// let background = new BackGround(this.ctx,map.get('background'));
		// background.draw();
		this.init();
	}

	init() {
		this.dataStore
			.put('background',
				new BackGround()
				);
		// console.log(Director);
		Director.getInstance().run();
	}
}