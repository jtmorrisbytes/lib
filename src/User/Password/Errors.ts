import type { IError } from "../../Error";
import { Resource } from "../../Resource";
export class ETooShort extends Resource.EBadRequest {
  MESSAGE = "Password is too short.";
  REASON = "";
  TYPE = "PASSWORD_TOO_SHORT";
}
export class ETooLong extends Resource.EBadRequest {
  TYPE = "PASSWORD_TOO_LONG";
  REASON = "";
  MESSAGE = "Password is too long";
}
export class EReqCharsMissing extends Resource.EMissing {
  TYPE = "MISSING_REQUIRED_CHARACTERS";
  REASON = "";
  MESSAGE = "Password is required to have at least one special character";
}
export class EReqSpecCharsMissing extends Resource.EMissing {
  TYPE = "MISSING_REQUIRED_SPECIAL_CHARACTERS";
  REASON = "";
  MESSAGE =
    "Password is required to have one of the following characters: !@#$%^&*()_+=\\/,.<>";
}
export class EMissing extends Resource.EMissing {
  MESSAGE = "Password was missing from req";
  REASON = "";
  TYPE = "PASSWORD_MISSING";
}
export class ENotAuthorized extends Resource.ENotAuthorized {
  MESSAGE = "Password does not match our records";
  REASON = "";
  TYPE = "PASSWORD_INCORRECT";
}
export class ENotValid extends Resource.EBadRequest {
  MESSAGE = "Invalid Password";
  REASON = "Password did not meet validation requirements";
  TYPE = "PASSWORD_INVALID";
}
