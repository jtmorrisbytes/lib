import { IError } from "../Error";
export interface IResourceError extends IError {
  CODE: number;
}

export namespace Resource {
  export class ENotFound implements IResourceError {
    MESSAGE = "The requested Resource could not be found";
    REASON = "The Resoure doesnt exist";
    TYPE = "RESOURCE_NOT_FOUND";
    CODE = 404;
  }
  export class EGeneralFailure implements IResourceError {
    MESSAGE = "Something went wrong on our end";
    REASON = "";
    TYPE = "GENERAL_FAILURE";
    CODE = 500;
  }
  export class EBadRequest implements IResourceError {
    MESSAGE = "Bad Request";
    REASON = "The client sent a bad request to the server";
    TYPE = "BAD_REQUEST";
    CODE = 400;
  }
  export class ENotAuthorized implements IResourceError {
    MESSAGE =
      "The Client is not authorized to perform the request at this time.";
    REASON =
      "Either you are not permitted to access this resource, or you must log in first";
    TYPE = "NOT_AUTHORIZED";
    CODE = 401;
  }
  export class EMissing implements IResourceError {
    MESSAGE = "A Required Resource is Missing from the request";
    REASON = "";
    TYPE = "RESOURCE_MISSING";
    CODE = 422;
  }
}
