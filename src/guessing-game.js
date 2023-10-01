class GuessingGame {
    constructor() {
        this.min = 0;
        this.max = 0;
        this.avg = 0;
    }

    setRange(min, max) {
        this.min = min;
        this.max = max;
        this.avg = max;
    }

    guess() {
        this.avg = Math.ceil((this.max + this.min) / 2);
        return this.avg;
    }

    lower() {
        this.max = this.avg;
    }

    greater() {
        this.min = this.avg;
    }
}

module.exports = GuessingGame;
