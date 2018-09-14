import {DataStore} from './base/DataStore.js';
export class Director{
	constructor() {
		console.log('构造器初始化');
		this.dataStore = DataStore.getInstance();
	}

	static getInstance() {
		if(!Director.instance) {
			Director.instance = new Director();
		}
		return Director.instance;
	}
	run() {
		const backgroudSprite = this.dataStore.get('background');
		backgroudSprite.draw();
		this.dataStore.get('land').draw();
	}
}