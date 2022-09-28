import { Database } from "./Database"
import { Router, Request, Response } from "express"
import { minimizeLeaderboard } from "./utils"


export const leaderboardApiRoutes = (router: Router, database: Database) => {
    router.get("/leaderboard/refresh", async (req: Request, res: Response) => {
        const leaderboard = await database.refreshLeaderboard()
        
        const minimizedLeaderboard = minimizeLeaderboard(leaderboard)

        return res.json({msg: "Ok", leaderboard: minimizedLeaderboard})

    })
    return router
}