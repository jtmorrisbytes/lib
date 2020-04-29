import type { IError } from "../Error";
export namespace Session {
  export class ENotAuthorized {
    MESSAGE = "You are not authorized to access this resource.";
    REASON = "Please Log in First";
    TYPE = "LOGIN_REQUIRED";
  }
}
