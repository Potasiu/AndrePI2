"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const bodyParser = require("body-parser"); //used to parse the form data that you pass in the request
const nameCount_1 = require("../routes/nameCount");
class App {
    constructor() {
        this.nameCount = new nameCount_1.NamesCount();
        this.app = express(); //run the express instance and store in app
        this.config();
        this.nameCount.routes(this.app);
    }
    config() {
        // support application/json type post data
        this.app.use(bodyParser.json());
        //support application/x-www-form-urlencoded post data
        this.app.use(bodyParser.urlencoded({
            extended: false
        }));
    }
}
exports.default = new App().app;
