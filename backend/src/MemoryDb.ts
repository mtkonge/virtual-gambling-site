import { User } from "./Models/User";
import { Database } from "./Database";
import { Session } from "./Models/Session";
import { Coinflip } from "Models/Coinflip";

export class MemoryDb extends Database {

    private users: User[]
    private sessions: Session[]

    constructor () {
        super()
        this.users = []
        this.sessions = []
    }

    public findUserById = async (id: number) => {
        for (let i in this.users) 
            if (this.users[i].id === id) 
                return this.users[i];
        return null;

    }

    public findUserByUsername = async (username: string) => {
        for (let i in this.users)
            if (this.users[i].username === username)
                return this.users[i];
        return null;
    }

    public addUser = async (user: User) => {
        this.users.push(user);
        return user;
    }

    public findSessionByToken = async (token: string) => {
        for (let i in this.sessions)
            if (this.sessions[i].token === token)
                return this.sessions[i];
        return null;
    }

    public addSession = async (session: Session) => {
        this.sessions.push(session);
        return session;
    }

    public removeSession = async (session: Session) => {
        return this.sessions.splice(this.sessions.indexOf(session), 1)[0] || null;
    }

    public calcCoinflipResult = async (user: User, coinflip: Coinflip) => {
        if (coinflip.flip()) {
            user.coins += coinflip.coinsUsed;
            return true;
        }
        user.coins -= coinflip.coinsUsed;
        return false
    }
}