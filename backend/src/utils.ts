import { Database } from "./Database";
import { Request } from "express";
import { LeaderboardUser } from "./LeaderboardUser";

export const generateUUID = (length: number = 32) => {
    const chars = "abcdef";
    let uuid = "";
    for (let i = 0; i < length; i++)
        uuid = uuid + chars.charAt(Math.random() * chars.length);
    return uuid;
};

export const checkSession = async (req: Request, database: Database) => {
    const token = req.cookies.token || req.headers.token;

    return await database.findSessionByToken(token);
};

export const random = (min: number, max: number) => {
    const random = Math.random();
    const shifted = random * (max - min);
    return shifted + min;
};

export const randInt = (min: number, max: number) => {
    return Math.floor(random(min, max));
};

export const doesExist = (values: any[]) => {
    for (let v in values) {
        if (v === null) return false;
        if (v === undefined) return false;
    }
    return true;
};

export const minimizeLeaderboard = (leaderboard: LeaderboardUser[]) => {
    let minimizedLeaderboard: LeaderboardUser[] = [] 
    for(let i = 0; i < 10; i++) {
        if (!leaderboard[i]) {
            return minimizedLeaderboard
        }
        minimizedLeaderboard.push(leaderboard[i])
    }
    
    return minimizedLeaderboard
}
