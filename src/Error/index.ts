export interface IError {
  readonly MESSAGE: string;
  REASON: string;
  readonly TYPE: String;
}
const FAILURE_MESSAGE = "Could not complete request";
export namespace Error {
  export class ESyntaxError implements IError {
    MESSAGE = FAILURE_MESSAGE;
    REASON = "A Syntax Error Occurred";
    TYPE = "SYNTAX_ERROR";
  }
  export class EUnknownError implements IError {
    MESSAGE = FAILURE_MESSAGE;
    REASON = "An Unknown Error Occurred";
    TYPE = "UNKOWN_ERROR";
  }
  export class ETypeError implements IError {
    MESSAGE = FAILURE_MESSAGE;
    REASON = "A Type Error Occurred";
    TYPE = "TYPE_ERROR";
  }
  export class EReferenceError implements IError {
    MESSAGE = "Could not complete request due to a Reference Error";
    REASON = "A Reference Error occurred";
    TYPE = "REFERENCE_ERROR";
  }
}
