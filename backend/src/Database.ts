import { Coinflip } from "./Models/Coinflip";
import { Session } from "./Models/Session";
import { User } from "./Models/User";

export abstract class Database {

    public abstract findUserById: (id: number) => Promise<User | null>;
    public abstract findUserByUsername: (username: string) => Promise<User | null>;
    public abstract addUser: (user: User) => Promise<User>;

    public abstract findSessionByToken: (token: string) => Promise<Session | null>;
    public abstract addSession: (session: Session) => Promise<Session>;  
    public abstract removeSession: (session: Session) => Promise<Session | null>;

    public abstract calcCoinflipResult: (user: User, coinflip: Coinflip) => Promise<true | false>;
}