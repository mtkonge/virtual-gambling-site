import { Database } from "./Database";
import { Request, Response, Router } from "express";
import { checkSession } from "./utils";
import { Coinflip } from "./Coinflip";

export const gameApiRoutes = (router: Router, database: Database) => {
    router.post("/games/coinflip", async (req: Request, res: Response) => {
        const coinsUsed = req.body.coins;

        const session = await checkSession(req, database);
        if (session === null) {
            return res.json({ msg: "Unauthorized" });
        }

        const user = await database.findUserById(session.userId);

        if (user === null) {
            return res.json({ msg: "User doesn't exist" });
        }

        if (user.coins < coinsUsed) {
            return res.json({ msg: "User doesn't have enough coins" });
        }

        const coinflip = new Coinflip(coinsUsed);

        const result = await database.calcCoinflipResult(user, coinflip);

        return res.json({ msg: "Ok", result: result });
    });
    return router;
};
