import {ResourceLoader} from './js/base/ResourceLoader.js';
import {BackGround} from './js/runtime/BackGround.js';
import {DataStore} from './js/base/DataStore.js';
import {Land} from "./js/runtime/Land.js";
import {Birds} from "./js/player/Birds.js";
import {StartButton} from "./js/player/StartButton.js";
import {Director} from './js/Director.js';
import {Score} from './js/player/Score.js'
export class Main{
	constructor() {
		// console.log('我的游戏');
		// new ResourceLoader();
		this.canvas = document.getElementById('game_canvas');
		this.ctx = this.canvas.getContext('2d');
		this.dataStore = DataStore.getInstance();
		this.director = Director.getInstance();
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
		this.director.isGameOver = false;

		this.dataStore
			.put('pencils',[])
			.put('background', BackGround)
			.put('birds',Birds)
			.put('startButton',StartButton)
			.put('score',Score)
			.put('land',Land);
		// console.log(Director);
		this.registerEvent();
		console.log(this.dataStore);
		this.director.createPencil()
		this.director.run();
	}
	registerEvent(){
		this.canvas.addEventListener('touchstart', e => {
			e.preventDefault();
			// console.log(this);
			if(this.director.isGameOver){
				this.init();
			}else{
				this.director.birdsEvent();
			}

		})
	}
}