import { Resource } from "../../Resource";
import { IError } from "../../Error";

export class EMissing extends Resource.EMissing {
  constructor(reason?: string) {
    super();
    if (reason) {
      this.REASON = reason;
    }
  }
  MESSAGE = "Field Email was missing on request";
  TYPE = "EMAIL_REQUIRED";
}
export class EBadRequest extends Resource.EBadRequest {
  constructor(reason?: string) {
    super();
    if (reason) {
      this.REASON = reason;
    }
  }
  MESSAGE = "Field Email is Invalid";
  TYPE = "EMAIL_INVALID";
}
export class ENotAuthorized extends Resource.ENotAuthorized {
  constructor(reason?: string) {
    super();
    if (reason) this.REASON = reason;
  }
  MESSAGE = "The povided Email Already Exists";
  TYPE = "EMAIL_TAKEN";
}
