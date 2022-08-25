import cors from "cors";
import express from "express";
import { MemoryDb } from "./MemoryDb"
import { api } from "./api"

const PORT = 8000;

const main = async () => {
    
    const app = express(); //create express app

    const database = new MemoryDb();


    app.use(cors()); //enables cors
    app.use(express.json()); //enables use of json in requests
    
    app.use("/api", api(database));
    app.use("/", express.static("../frontend"));

    app.listen(PORT, () => console.log("express hosted on port:", PORT)) //starts the express app with port PORT
}
main();