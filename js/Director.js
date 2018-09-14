import {DataStore} from './base/DataStore.js';
import {UpPencil} from './runtime/UpPencil.js';
import {DownPencil} from './runtime/DownPencil.js';
export class Director{
	constructor() {
		console.log('构造器初始化');
		this.dataStore = DataStore.getInstance();
		this.moveSpeed = 2;
	}

	static getInstance() {
		if(!Director.instance) {
			Director.instance = new Director();
		}
		return Director.instance;
	}
	createPencil() {
		const minTop = window.innerHeight / 8;
		const maxTop = window.innerHeight / 2;
		const top = minTop + Math.random()*(maxTop - minTop);
		this.dataStore.get('pencils').push(new UpPencil(top));
		this.dataStore.get('pencils').push(new DownPencil(top));
	}
	run() {
		const backgroudSprite = this.dataStore.get('background');
		backgroudSprite.draw();
		this.dataStore.get('land').draw();
		this.dataStore.get('pencils').forEach(function(value,index,array){
			value.draw();
		})
		let timer = requestAnimationFrame(() =>{
			this.run()
		});
		this.dataStore.put('timer',timer)		
	}
}