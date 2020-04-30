export class Auth {
  STATE_INVALID = "STATE_INVALID";
  STATE_MISSING = "STATE_MISSING";
  STATE_MISMATCH = "STATE_MISMATCH";
  STATE_NOT_FOUND = "STATE_NOT_FOUND";
  IP_MISMATCH = "IP_MISMATCH";
  SESSION_EXPIRED = "SESSION_EXPIRED";
}
export class ELoginRequired {
  MESSAGE = "You are not authorized to access this resource.";
  REASON = "Please Log in First";
  TYPE = "LOGIN_REQUIRED";
}
