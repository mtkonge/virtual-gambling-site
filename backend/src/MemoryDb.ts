import { User } from "./User";
import { Database } from "./Database";
import { Session } from "./Session";
import { Coinflip } from "./Coinflip";
import { LeaderboardUser } from "./LeaderboardUser";
import { randInt } from "./utils";

export class MemoryDb extends Database {
    private users: User[];
    private sessions: Session[];
    private leaderboard: LeaderboardUser[]

    constructor() {
        super();
        this.leaderboard = []
        this.users = [];
        for (let i = 0; i < 10; i++) {
            let x = new User("test" + i, "password" + i)
            x.coinsWon = randInt(0, 100)
            this.users.push(x)
        }
        this.sessions = [];
    }

    public findUserById = async (id: number) => {
        for (let i in this.users)
            if (this.users[i].id === id) return this.users[i];
        return null;
    };

    public findUserByUsername = async (username: string) => {
        for (let i in this.users)
            if (this.users[i].username === username) return this.users[i];
        return null;
    };

    public addUser = async (user: User) => {
        this.users.push(user);
        return user;
    };

    public findSessionByToken = async (token: string) => {
        for (let i in this.sessions)
            if (this.sessions[i].token === token) return this.sessions[i];
        return null;
    };

    public addSession = async (session: Session) => {
        this.sessions.push(session);
        return session;
    };

    public removeSession = async (session: Session) => {
        return (
            this.sessions.splice(this.sessions.indexOf(session), 1)[0] || null
        );
    };

    public calcCoinflipResult = async (user: User, coinflip: Coinflip) => {
        if (coinflip.flip()) {
            user.coins += coinflip.coinsUsed;
            user.coinsWon += coinflip.coinsUsed
            return true;
        }
        user.coins -= coinflip.coinsUsed;
        return false;
    };

    public incrementAllCoins = async (coins: number) => {
        for(let i = 0; i < this.users.length; i++) {
            this.users[i].coins += coins
        }
    };
    public refreshLeaderboard = async () => {
        for (let i = 0; i < this.users.length; i++) {
            this.leaderboard.push(new LeaderboardUser(this.users[i].username, this.users[i].coinsWon))
        }
        this.leaderboard = this.leaderboard.sort(function(a, b){return b.score-a.score})
        
        return this.leaderboard
    }
}
