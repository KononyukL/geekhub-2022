import express from 'express';
import { postController, userController } from './controllers';
import morgan from 'morgan';
import cors from 'cors';
import helmet from 'helmet';
import * as mongoose from 'mongoose';
import { exceptionFilter } from './common/error/exception.filter';

export class App {
  port = 8000;
  app = express();

  useRouts() {
    this.app.use('/users', userController.router);
    this.app.use('/posts', postController.router);
  }

  useMiddlewares() {
    this.app.use(helmet());
    this.app.use(cors());
    this.app.use(morgan(':date[iso] ":method :url" :status :res[content-length]'));
    this.app.use(express.json());
  }

  async initDb() {
    await mongoose.set('strictQuery', false);
    await mongoose.connect('mongodb://localhost:27017/homework');
  }

  async init() {
    this.useMiddlewares();
    this.useRouts();
    await this.initDb();

    this.app.use(exceptionFilter.catch.bind(exceptionFilter));

    this.app.listen(this.port, () => {
      console.log(`Server s listening on http://localhost: ${this.port}`);
    });
    process.on('uncaughtException', (err: Error) => {
      console.log('Uncaught error', err.message);
    });

    process.on('unhandledRejection', (err: Error) => {
      console.log('Uncaught ASYNC error', err.message);
    });
  }
}

(async () => {
  const app = new App();
  await app.init();
})();
