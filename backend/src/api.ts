import { Database } from "./Database"
import { Router } from "express"
import { userApiRoutes } from "./users"
import { gameApiRoutes } from "./games"



export const api = (database: Database) => {
    const router = Router()
    userApiRoutes(router, database)
    gameApiRoutes(router, database)
    return router
}

