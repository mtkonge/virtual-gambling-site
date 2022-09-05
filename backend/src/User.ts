import { randInt } from "./utils";

export class User {
    public id: number;
    public username: string;
    public password: string;
    public coins: number;

    constructor(username: string, password: string) {
        this.id = randInt(0, 100000000);
        this.username = username;
        this.password = password;
        this.coins = 100;
    }
}
