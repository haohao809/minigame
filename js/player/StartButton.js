import {Sprite} from '../base/Sprite.js'
export class StartButton extends Sprite{
	constructor(){
		const image = Sprite.getImage('startButton');
		super(image,0,0,
			image.width,image.height,
			(window.innerWidth - image.width)/2, (window.innerHeight - image.height)/2,
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