import type { IError } from "../../Error";
export class ETooShort implements IError {
  MESSAGE = "Password is too short.";
  REASON = "";
  TYPE = "TOO_SHORT";
}
export class ETooLong implements IError {
  TYPE = "TOO_LONG";
  REASON = "";
  MESSAGE = "Password is too long";
}
export class EReqCharsMissing {
  TYPE = "MISSING_REQUIRED_CHARACTERS";
  REASON = "";
  MESSAGE = "Password is required to have at least one special character";
}
export class EReqSpecCharsMissing {
  TYPE = "MISSING_REQUIRED_SPECIAL_CHARACTERS";
  REASON = "";
  MESSAGE =
    "Password is required to have one of the following characters: !@#$%^&*()_+=\\/,.<>";
}
export class EMissing implements IError {
  MESSAGE = "Password is missing required characters";
  REASON = "";
  TYPE = "LOGIN_PASSWORD_MISSING";
}
export class EInvalid implements IError {
  MESSAGE = "Password does not match our records";
  REASON = "";
  TYPE = "LOGIN_PASSWORD_INCORRECT";
}
export class ENoError implements IError {
  MESSAGE = "";
  REASON = "";
  TYPE = "";
}
