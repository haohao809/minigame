import { DataStore } from './base/DataStore.js';
import { UpPencil } from './runtime/UpPencil.js';
import { DownPencil } from './runtime/DownPencil.js';
import { Birds } from './player/Birds.js';
import { StartButton } from './player/StartButton.js';
import {Score} from './player/Score.js'
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
        const minTop = this.dataStore.canvas.width / 8;
        const maxTop = this.dataStore.canvas.height / 2;
        const top = minTop + Math.random() * (maxTop - minTop);
        this.dataStore.get('pencils').push(new UpPencil(top));
        this.dataStore.get('pencils').push(new DownPencil(top));
    }
    birdsEvent() {
        for (let i = 0; i <= 2; i++) {
            this.dataStore.get('birds').y[i] = this.dataStore.get('birds').birdsY[i]
            // console.log(this.dataStore.get('birds').birdsY[i])
        }
        this.dataStore.get('birds').time = 0;
    }
    //检查是否撞击地板和铅笔 
    check() {
        const land = this.dataStore.get('land');
        const birds = this.dataStore.get('birds');
        const pencils = this.dataStore.get('pencils');
        const score = this.dataStore.get('score');
        if (birds.birdsY[0] + birds.birdsHeight[0] >= land.y) {
            this.isGameOver = true;
            console.log('游戏结束')
            return
        }
        const birdsBorder = {
            top: birds.y[0],
            bottom: birds.birdsY[0] + birds.birdsHeight[0],
            left: birds.birdsX[0],
            right: birds.birdsX[0] + birds.birdsWidth[0]
        }
        // console.log(pencils);
        pencils.forEach((item) => {

            const pencilBorder = {
                top: item.y,
                bottom: item.y + item.height,
                left: item.x,
                right: item.x + item.width
            }

            if (birdsBorder.top >= pencilBorder.bottom || birdsBorder.bottom <= pencilBorder.top || birdsBorder.left >= pencilBorder.right || birdsBorder.right <= pencilBorder.left) {


            } else {
                this.isGameOver = true;
                console.log('游戏结束')

            }
        })
        // console.log('birdsBorderleft' ,birdsBorder.left);
        // console.log('birdsX', birds.birdsX[0]);
        // console.log('pencilsX',pencils[0].x);
        // console.log('pencilsW',pencils[0].width);
        if(birds.birdsX[0] > pencils[0].x + pencils[0].width && score.isScore){
            score.isScore = false;
            score.scoreNumber++;
        }

    }
    run() {
        this.check();
        if (!this.isGameOver) {
            const backgroudSprite = this.dataStore.get('background');
            backgroudSprite.draw();

            const pencils = this.dataStore.get('pencils');
            // console.log(pencils);

            if (pencils[0].x + pencils[0].width <= 0 && pencils.length === 4) {

                pencils.shift();
                pencils.shift();

                this.dataStore.get('score').isScore = true;
            }

            if (pencils[0].x <= (this.dataStore.canvas.width - pencils[0].width) / 2 && pencils.length === 2) {
                // console.log(pencils[0].x);
                // console.log(window.innerWidth);
                this.createPencil();
            }

            this.dataStore.get('pencils').forEach(function(value, index, array) {
                value.draw();
            })
            this.dataStore.get('land').draw();
            this.dataStore.get('birds').draw();
            this.dataStore.get('score').draw();

            let timer = requestAnimationFrame(() => {
                this.run();

            });
            this.dataStore.put('timer', timer)
        } else {
        	// console.log(this.dataStore.get('startButton'))
        	// console.log(StartButton)
        	this.dataStore.get('startButton').draw();
            cancelAnimationFrame(this.dataStore.get('timer'));
            this.dataStore.destroy();
        }
    }
}