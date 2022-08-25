import { Database } from "./Database";
import { Request, Response, Router } from "express";
import { User } from "./Models/User";
import { Session } from "./Models/Session";
import { checkSession, generateUUID } from "./utils";

export const userApiRoutes = (router: Router, database: Database) => {

    router.post("/register", async (req: Request, res: Response) => {

        const username = req.body.username;
        const password = req.body.username;

        if (!username || !password || /[<>]/.test(username))
            return res.json({msg: "Invalid username/password"})

        
        if (await database.findUserByUsername(username))
            return res.json({msg: "Username occupied"})
        
        
        const user = new User(username, password)

        await database.addUser(user)

        return res.json({msg: "OK", userId: user.id})
    });

    router.post("/login", async (req: Request, res: Response) => {

        //gets username and password from inputs
        const username = req.body.username;
        const password = req.body.password;
        
        const user = await database.findUserByUsername(username);

        //checks if the user exists
        if (user === null) {
            return res.json({ msg: "Wrong username/password" });
        }

        //checks if password is correct
        if (user.password !== password) {
            return res.json({ msg: "Wrong username/password" })
        }

        // create a session
        const session = new Session(generateUUID(), user.id);

        await database.addSession(session);        

        //sets a cookie, called "token" on the clients browser with the token
        res.cookie("token", session.token);

        //display message, id and token in console
        return res.json({ msg: "Ok", id: user.id, token: session.token });
    });

    router.post("/logout", async (req: Request, res: Response) => {

        //check auth, get session
        const session = await checkSession(req, database);
        if (session !== null) {
            await database.removeSession(session);
        }

        //remove cookie
        res.clearCookie("token")
        return res.json({ msg:  "Ok"})


    });

    router.get("/user/:id", async (req: Request, res: Response) => {
        
        // get id from params
        const id = parseInt(req.params.id);

        //if session not exist redirect
        const session = await checkSession(req, database);
        if (session === null) {
            return res.json({msg: "Unauthorized"});
        }

        //respond with user information

        const user = await database.findUserById(id);

        if (user === null)
            return res.json({msg: "reee"});

        return res.json({ id: user.id, username: user.username });

    })


    router.get("/data", async (req: Request, res: Response) => {

        const session = await checkSession(req, database);

        //check if session exists
        if (session === null) {
            return res.json({msg: "Unauthorized"});
        }

        //trying to find user from userId, and returns user found
        
        const user = await database.findUserById(session.userId);

        if (user === null) 
            return res.json({ msg: "No worky worky" });

        return res.json({msg: "Ok", data: user});
    })
    return router
}