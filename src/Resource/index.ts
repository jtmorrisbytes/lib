import { IError } from "../Error";
export namespace Resource {
  export class ENotFound implements IError {
    MESSAGE = "The requested Resource could not be found";
    REASON = "The Resoure doesnt exist";
    TYPE = "RESOURCE_NOT_FOUND";
  }
  export class EGeneralFailure implements IError {
    MESSAGE = "Something went wrong on our end";
    REASON = "";
    TYPE = "GENERAL_FAILURE";
  }
  export class EBadRequest implements IError {
    MESSAGE = "Bad Request";
    REASON = "The client sent a bad request to the server";
    TYPE = "BAD_REQUEST";
  }
  export class ENotAuthorized implements IError {
    MESSAGE =
      "The Client is not authorized to perform the request at this time.";
    REASON =
      "Either you are not permitted to access this resource, or you must log in first";
    TYPE = "NOT_AUTHORIZED";
  }
}
