import cors from "cors";
import express from "express";
import { Request, Response } from "express-serve-static-core";


const PORT = 8000;

const main = async () => {

    const app = express(); //create express app
    app.use(cors()); //enables cors
    app.use(express.json()); //enables use of json in requests
    
    app.use("/", express.static("../frontend"));

    app.listen(PORT, () => console.log("express hosted on port:", PORT)) //starts the express app with port PORT
}
main();