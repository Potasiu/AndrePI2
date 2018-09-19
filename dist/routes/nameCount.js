"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//import names = require('../res/oliver-twist.txt'); 
class NamesCount {
    routes(app) {
        app.route('/nameCount')
            .get((req, res) => {
            let namesCount = 0;
            res.status(200).send(namesCount);
        });
    }
}
exports.NamesCount = NamesCount;
