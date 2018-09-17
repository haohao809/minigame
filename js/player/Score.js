import DataStore from '../base/DataStore.js'

export class Score {
    constructor() {
        const ctx = DataStore.getInstance().ctx;
        const scoreNumber = 0;
    }
    draw() {
        this.ctx.font = '25px Arial';
        this.ctx.fillStyle = '#ffcbeb';
        this.ctx.fillText(
            this.scoreNumber,
            window.innerWidth / 2,
            window.innerHeight / 18,
            1000
        )
    }

}