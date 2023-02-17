import express from 'express'
import bodyParser from "body-parser";
import {postController, userController} from "./controllers";
import morgan from 'morgan'
import cors from 'cors'
import helmet from "helmet";

export class App {
    port = 8000;
     app = express();

     useRouts() {
         this.app.use('/users', userController.router);
         this.app.use('/posts', postController.router)
     }

     useMiddlewares() {
         this.app.use(helmet());
         this.app.use(cors());
         this.app.use(
             morgan(':date[iso] ":method :url" :status :res[content-length]')
         );
         this.app.use(bodyParser.urlencoded({extended: true}));
     }

     async init() {
         this.useMiddlewares()
         this.useRouts();
         this.app.listen(this.port, () => {
             console.log(`Server s listening on http://localhost: ${this.port}`)
         })
     }
}

(async () => {
    const app = new App()
    await app.init()
})()






