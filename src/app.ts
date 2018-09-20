import * as express from 'express';
import * as bodyParser from 'body-parser';
import { NamesCount } from './routes/nameCount';

class App {

    public app: express.Application;
    public nameCount: NamesCount = new NamesCount();

    constructor() {
        this.app = express(); 
        this.config();
        this.nameCount.routes(this.app);
    }

    private config(): void {
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({
            extended: false
        }));
    }

}

export default new App().app;