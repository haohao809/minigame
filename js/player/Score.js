import {DataStore} from '../base/DataStore.js'

export class Score {
    constructor() {
        this.ctx = DataStore.getInstance().ctx;
        this.scoreNumber = 0;
        //由于canvas的刷新率，控制score加分的变量
        this.isScore = true;
        this.dataStore = DataStore.getInstance();
    }
    draw() {
        // console.log(this.ctx);
        this.ctx.font = '25px Arial';
        this.ctx.fillStyle = '#ffcbeb';
        this.ctx.fillText(
            this.scoreNumber,
            this.dataStore.canvas.width / 2,
            this.dataStore.canvas.height / 18,
            1000
        )
    }

}