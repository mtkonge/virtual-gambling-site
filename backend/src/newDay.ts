import { Database } from "./Database";
import { Router, Request, Response } from "express";

export const newDayApiRoutes = (router: Router, database: Database) => {
    let lastDay = new Date().getDate()
    router.post("/newDay", async (req: Request, res: Response) => {
        if (!lastDay) {
            return res.json({msg: "Day invalid"})
        }
        
        const today = new Date().getDate()
        
        if (lastDay === today) {
            return res.json({msg: "Day has not incremented yet"})
        }
        
        database.incrementAllCoins(20)
        lastDay = today

        return res.json({msg: "Ok"})
    });

    return router;
};
