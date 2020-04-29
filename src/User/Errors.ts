import { Resource } from "../Resource";

export class ENotFoundByEmail extends Resource.ENotFound {
  MESSAGE = "Could not find any user by that email";
  REASON = "the email does not exist";
  TYPE = "USER_NOT_FOUND_EMAIL";
}
export class ENotFoundById extends Resource.ENotFound {
  MESSAGE = "Could not find any user by that Id";
  REASON = "the given ID was deleted or does not exist yet";
  TYPE = "USER_NOT_FOUND_ID";
}
