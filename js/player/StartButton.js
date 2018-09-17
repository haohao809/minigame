import {Sprite} from '../base/Sprite.js'
import {DataStore} from '../base/DataStore.js'
export class StartButton extends Sprite{
	constructor(){
		const image = Sprite.getImage('startButton');
		const dataStore = DataStore.getInstance();
		super(image,0,0,
			image.width,image.height,
			(dataStore.canvas.width - image.width)/2, (dataStore.canvas.height - image.height)/2,
			image.width, image.height)
	}
	clickEvent(){

	}
	// draw(){
	// 	super.draw(this.img,
	// 		this.srcX,
	// 		this.srcY,
	// 		this.srcW,
	// 		this.srcH,
	// 		this.x,
	// 		this.y,
	// 		this.width,
	// 		this.height)
	// }
}