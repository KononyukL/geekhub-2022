import { IExceptionFilter } from '../type-and-interfaces';
import { NextFunction, Request, Response } from 'express';
import { HttpError } from './htttp.error';
import { ValidationError } from './validation.error';
import { Logger } from 'tslog';

export class ExceptionFilter implements IExceptionFilter {
  readonly logger = new Logger();
  catch(err: Error | HttpError, req: Request, res: Response, next: NextFunction): void {
    if (err instanceof HttpError) {
      this.logger.warn(`[${err.context}] Error ${err.statusCode} : ${err.message}`);

      res.status(err.statusCode).send({ error: err.message });
    } else if (err instanceof ValidationError) {
      this.logger.warn(`[Validation] Error `);

      res.status(422).send({ error: [...err.validationErrors] });
    } else {
      res.status(500).send({ error: err.message });
    }
  }
}

export const exceptionFilter = new ExceptionFilter();
