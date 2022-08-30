import { randInt } from "utils";
import { Game } from "./Game";

export class Coinflip extends Game {
    
    constructor(coinsUsed: number) {
        super(coinsUsed);
    }

    flip() {
        if(randInt(1,100) < 40)
            return true
        return false
    }

    calcResult() {
        if (this.flip())
            return this.coinsUsed * 2
        return 0
    }


}