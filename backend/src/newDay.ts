import { Database } from "./Database";
import { Router, Request, Response } from "express";

export const newDayApiRoutes = (router: Router, database: Database) => {
    let lastDay = new Date().getDate()
    router.post("/newDay", async (req: Request, res: Response) => {
        if (!lastDay) {
            return res.json({msg: "Day invalid"})
        }
        
        const day = new Date().getDate() 
        
        if (lastDay === day) {
            return res.json({msg: "Day has not incremented yet"})
        }
        
        //Todo: add coins to users
    });

    return router;
};
