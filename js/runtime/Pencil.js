import {Sprite} from '../base/Sprite.js'
import {DataStore} from "../base/DataStore.js"
export class Pencil extends Sprite{
	constructor(image, top) {
			super(image,
				0,0,
				image.width,image.height,
				DataStore.getInstance().canvas.width,0,
				image.width, image.height); 
			this.top = top;
			this.moveSpeed = 2;
			this.dataStore = DataStore.getInstance();
	}

	draw() {
		this.x = this.x - this.moveSpeed;
		// console.log(this.x);
		// if(this.x === 0){
		// 	this.x = window.innerWidth - Director.getInstance().moveSpeed;
		// 	// debugger;
		// }
		super.draw(this.img,
			0,0,
			this.img.width,this.img.height,
			this.x,this.y,
			this.img.width,this.img.height)
	}
}