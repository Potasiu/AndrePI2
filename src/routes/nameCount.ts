import {Request, Response} from "express";
import fs = require('fs');

export class NameResults {
    public name: string;
    public times: number;
}

//import names = require('../res/oliver-twist.txt'); 
export class NamesCount { 
    
    public titleArray: Array<string> = null;
    public nameArray: Array<string> = null;
    public surnameArray: Array<string> = null;

    public importArrays(): string {
        let exportData: string = "";
        
        let contents: string = fs.readFileSync('res/titles.txt','utf8');
        let titlesArray: Array<string> = null;
        titlesArray = contents.split("\n");
        this.titleArray = this.titleArray;
        contents = fs.readFileSync('res/first-names.txt','utf8');
        this.nameArray = contents.split("\r");
        contents = fs.readFileSync('res/last-names.txt','utf8');
        this.surnameArray = contents.split("\r");
        //console.log(this.titleArray);
        //console.log(this.nameArray);
        //console.log(this.surnameArray);
        contents = fs.readFileSync('res/oliver-twist.txt','utf8');
        let bookContent: string = contents;


        let nameResults: Array<NameResults> = [];

        this.nameArray.forEach(name => {
            let matchWord: string = name;
            let searchTerm = new RegExp(matchWord,'g');
            let matchCount: number = 0;
            if (bookContent.match(searchTerm)) 
                matchCount = bookContent.match(searchTerm).length;
            let resultObject: NameResults = new NameResults();
            resultObject.name = matchWord;
            resultObject.times = matchCount;
            if (matchCount > 0) nameResults.push(resultObject);
        });

        let sortedArray: Array<NameResults> = nameResults.sort((n1,n2) => {
            if (n1.times > n2.times) {
                return -1;
            }
            if (n1.times < n2.times) {
                return 1;
            }
            return 0;
        });
        
        sortedArray.forEach( item => {
            let outputLine: string = "Name: " + item.name + " x " + item.times + " times <br>";
            exportData += outputLine; 
        });
        
        return exportData;
    }

    public routes(app): void { //received the express instance from app.ts file         
        app.route('/nameCount')
        .get((req: Request, res: Response) => {  
            let namesCount: number = 33;  
            let exportData: string = this.importArrays();    
            res.status(200).send(exportData)
            //res.status(200).send(namesCount);
        })               
    }
}