import { NextFunction, Request, Response, Router } from 'express';
import { IControllerRouter, TBaseObject } from '../type-and-interfaces';
import { ValidationError } from '../error/validation.error';

export abstract class BaseController {
  private readonly _router = Router();

  get router(): Router {
    return this._router;
  }

  protected bindRouter(routes: IControllerRouter[]) {
    for (const route of routes) {
      const handler = this.catchErrorHandler(route.handler);

      const pipeline = [];
      if (route.validators) {
        pipeline.push(this.createValidators(route.validators));
      }
      this.router[route.method](route.path, pipeline, handler);
    }
  }

  catchErrorHandler(handler: any) {
    return async (req: Request, res: Response, next: NextFunction) => {
      try {
        await handler.bind(this)(req, res, next);
      } catch (e) {
        next(e);
      }
    };
  }

  createValidators(validators: TBaseObject) {
    return (req: Request, res: Response, next: NextFunction) => {
      let errors: any[] = [];
      const joiOptions = {
        abortEarly: false,
        allowUnknown: true,
        stripUnknown: true
      };

      for (const validatorName of Object.keys(validators)) {
        const result = validators[validatorName as keyof TBaseObject].validate(
          req[validatorName as keyof Request],
          joiOptions
        );

        if (result.value) {
          req[
            validatorName as keyof Pick<Request, 'body' | 'query' | 'params' | 'header' | 'cookies'>
          ] = result.value;
        }

        if (result.error) errors = errors.concat(result.error.details);
      }

      if (errors.length) {
        throw new ValidationError(errors);
      }

      next();
    };
  }
}
