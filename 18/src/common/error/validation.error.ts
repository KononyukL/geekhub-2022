export class ValidationError extends Error {
  validationErrors: any[];

  constructor(errors: any[]) {
    super();
    this.validationErrors = errors;
  }
}
