import { randInt } from "../utils";

export class Coinflip {
    public coinsUsed: number

    constructor(coinsUsed: number) {
        this.coinsUsed = coinsUsed
    }

    flip() {
        if(randInt(1,100) < 50)
            return true
        return false
    }



}