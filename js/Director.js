import { DataStore } from './base/DataStore.js';
import { UpPencil } from './runtime/UpPencil.js';
import { DownPencil } from './runtime/DownPencil.js';
import {Birds} from './player/Birds.js'
export class Director {
    constructor() {
        console.log('构造器初始化');
        this.dataStore = DataStore.getInstance();
        this.moveSpeed = 2;
    }

    static getInstance() {
        if (!Director.instance) {
            Director.instance = new Director();
        }
        return Director.instance;
    }
    createPencil() {
        const minTop = window.innerHeight / 8;
        const maxTop = window.innerHeight / 2;
        const top = minTop + Math.random() * (maxTop - minTop);
        this.dataStore.get('pencils').push(new UpPencil(top));
        this.dataStore.get('pencils').push(new DownPencil(top));
    }
    run() {
    	if(!this.isGameOver){
	        const backgroudSprite = this.dataStore.get('background');
	        backgroudSprite.draw();

	        const pencils = this.dataStore.get('pencils');
	        // console.log(pencils);
	         
	        if(pencils[0].x + pencils[0].width <=0 && pencils.length === 4) {

	        	pencils.shift();
	        	pencils.shift();
	        } 
	        
	        if(pencils[0].x <= (window.innerWidth - pencils[0].width) /2 && pencils.length === 2) {
	        	// console.log(pencils[0].x);
	        	// console.log(window.innerWidth);
	        	this.createPencil();
	        }

	        this.dataStore.get('pencils').forEach(function(value, index, array) {
	            value.draw();
	        })
	        this.dataStore.get('land').draw();
	        this.dataStore.get('birds').draw();

	        let timer = requestAnimationFrame(() => {
	            this.run()
	        });
	        this.dataStore.put('timer', timer)
    	}else{
    		cancelAnimationFrame(this.dataStore.get('timer'));
    		this.dataStore.destory();
    	}
    }
}