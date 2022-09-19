import { Database } from "./Database";
import { Router } from "express";
import { userApiRoutes } from "./users";
import { gameApiRoutes } from "./games";
import { newDayApiRoutes } from "./newDay";

export const api = (database: Database) => {
    const router = Router();
    newDayApiRoutes(router, database)
    userApiRoutes(router, database);
    gameApiRoutes(router, database);
    return router;
};
