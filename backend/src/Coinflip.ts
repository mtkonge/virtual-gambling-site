import { randInt } from "./utils";

export class Coinflip {
    public coinsUsed: number;

    constructor(coinsUsed: number) {
        this.coinsUsed = coinsUsed;
    }

    flip() {
        return randInt(1, 100) < 45
    }
}
