import { randInt } from "./utils";

export class Session {
    public id: number;
    public token: string;
    public userId: number;

    constructor(token: string, userId: number) {
        this.id = randInt(10000000, 99999999);
        this.token = token;
        this.userId = userId;
    }
}
