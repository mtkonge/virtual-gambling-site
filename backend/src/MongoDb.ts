import { Db, MongoClient } from "mongodb";
import { User} from "./User";
import { Database } from "./Database";
import { Session } from "./Session";
import { Coinflip } from "./Coinflip";


enum Collections {
    Users = "users",
    Sessions = "sessions",
}

export class MongoDb extends Database {

    private database!: Db;

    constructor () {
        super();
    } 

    public connect = async () => {
        const client = new MongoClient("mongodb://127.0.0.1:27017");
        await client.connect();
        const database = client.db("gambling-site");
        this.database = database;
    }

    public findUserById = async (id: number) => {
        const users = this.database.collection<User>(Collections.Users);
        return await users.findOne({id});
    };

    public findUserByUsername = async (username: string) => {
        const users = this.database.collection<User>(Collections.Users);
        return await users.findOne({username});

    };

    public addUser = async (user: User) => {
        const users = this.database.collection<User>(Collections.Users)
        const result = await users.insertOne(user)
        if (!result.acknowledged)
            throw new Error("Database insert operation fail");
        return user;
    };

    public findSessionByToken = async (token: string) => {
        const sessions = this.database.collection<Session>(Collections.Sessions);
        return await sessions.findOne({token});
    };

    public addSession = async (session: Session) => {
        const sessions = this.database.collection<Session>(Collections.Sessions)
        const result = await sessions.insertOne(session)
        if (!result.acknowledged)
            throw new Error("Database insert operation fail");
        return session;
    };

    public removeSession = async (session: Session) => {
        const sessions = this.database.collection<Session>(Collections.Sessions);
        const result = await sessions.findOneAndDelete(session);
        return result.value;
    };

    public calcCoinflipResult = async (user: User, coinflip: Coinflip) => {
        const users = this.database.collection<User>(Collections.Users)
        if (coinflip.flip()) {
            await users.findOneAndUpdate({id: user.id}, {$set: {coins: (user.coins + coinflip.coinsUsed)}})
            return true;
        }
        await users.findOneAndUpdate({id: user.id}, {$set: {coins: (user.coins - coinflip.coinsUsed)}})
        return false;
    };
    public incrementAllCoins = async (coins: number) => {
        const users = this.database.collection<User>(Collections.Users)
        users.updateMany( {}, {$inc: {coins: coins}})

    };

}