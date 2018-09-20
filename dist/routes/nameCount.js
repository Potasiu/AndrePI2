"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
class NameResults {
}
exports.NameResults = NameResults;
//import names = require('../res/oliver-twist.txt'); 
class NamesCount {
    constructor() {
        this.titleArray = null;
        this.nameArray = null;
        this.surnameArray = null;
    }
    importArrays() {
        let exportData = "";
        let contents = fs.readFileSync('res/titles.txt', 'utf8');
        let titlesArray = null;
        titlesArray = contents.split("\n");
        this.titleArray = this.titleArray;
        contents = fs.readFileSync('res/first-names.txt', 'utf8');
        this.nameArray = contents.split("\r");
        contents = fs.readFileSync('res/last-names.txt', 'utf8');
        this.surnameArray = contents.split("\r");
        //console.log(this.titleArray);
        //console.log(this.nameArray);
        //console.log(this.surnameArray);
        contents = fs.readFileSync('res/oliver-twist.txt', 'utf8');
        let bookContent = contents;
        let nameResults = [];
        this.nameArray.forEach(name => {
            let matchWord = name;
            let searchTerm = new RegExp(matchWord, 'g');
            let matchCount = 0;
            if (bookContent.match(searchTerm))
                matchCount = bookContent.match(searchTerm).length;
            let resultObject = new NameResults();
            resultObject.name = matchWord;
            resultObject.times = matchCount;
            if (matchCount > 0)
                nameResults.push(resultObject);
        });
        let sortedArray = nameResults.sort((n1, n2) => {
            if (n1.times > n2.times) {
                return -1;
            }
            if (n1.times < n2.times) {
                return 1;
            }
            return 0;
        });
        sortedArray.forEach(item => {
            let outputLine = "Name: " + item.name + " x " + item.times + " times <br>";
            exportData += outputLine;
        });
        return exportData;
    }
    routes(app) {
        app.route('/nameCount')
            .get((req, res) => {
            let namesCount = 33;
            let exportData = this.importArrays();
            res.status(200).send(exportData);
            //res.status(200).send(namesCount);
        });
    }
}
exports.NamesCount = NamesCount;
