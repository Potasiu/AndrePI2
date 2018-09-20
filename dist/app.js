"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const bodyParser = require("body-parser");
const nameCount_1 = require("./routes/nameCount");
class App {
    constructor() {
        this.nameCount = new nameCount_1.NamesCount();
        this.app = express();
        this.config();
        this.nameCount.routes(this.app);
    }
    config() {
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({
            extended: false
        }));
    }
}
exports.default = new App().app;
