import { Database } from "./Database"
import { Router, Request, Response } from "express"


export const leaderboardApiRoutes = (router: Router, database: Database) => {
    router.get("/leaderboard/update", async (req: Request, res: Response) => {
        let leaderboard = await database.updateLeaderboard()
        
        return res.json({msg: "Ok", leaderboard: leaderboard})

    })

    
    return router
}