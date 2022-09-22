import { randInt } from "./utils";

export class User {
    public id: number;
    public username: string;
    public password: string;
    public coins: number;
    public coinsWon: number;

    constructor(username: string, password: string) {
        this.id = randInt(10000000, 99999999);
        this.username = username;
        this.password = password;
        this.coins = 100;
        this.coinsWon = 0;

    }
}
