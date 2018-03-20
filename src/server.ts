import * as path from "path";
import * as express from "express";
import * as logger from "morgan";
import * as bodyParser from "body-parser";

const PlacesData = require("./data/places");

class App {

    public express: express.Application;

    constructor() {
        this.express = express();
        this.middleware();
        
        this.express.get("/", (req, res) => {
            res.send(PlacesData);
        });
    }

    private middleware(): void {

        //CORS
        this.express.use((req, res, next) => {
            res.header("Access-Control-Allow-Origin", "*");
            res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
            next();
        });

        this.express.use(logger("dev"));
        this.express.use(bodyParser.json());
        this.express.use(bodyParser.urlencoded({ extended: false}));
    }
}

export default new App().express;