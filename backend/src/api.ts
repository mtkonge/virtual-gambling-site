import { Database } from "./Database"
import { Router } from "express"
import { userApiRoutes } from "./users"



export const api = (database: Database) => {
    const router = Router()
    userApiRoutes(router, database)
    return router
}

