import {Request, Response} from "express";

//import names = require('../res/oliver-twist.txt'); 
export class NamesCount { 
    
    public routes(app): void { //received the express instance from app.ts file         
        app.route('/nameCount')
        .get((req: Request, res: Response) => {  
            let namesCount: number = 0;          
            res.status(200).send(namesCount);
        })               
    }
}