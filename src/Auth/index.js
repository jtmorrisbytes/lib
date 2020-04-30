const RESPONSE = require("../Response");

const typePrefix = "AUTH_";
const IAuthError = {
  ...RESPONSE.IResponseError,
  MESSAGE: `An Authentication error occurred`,
  TYPE: typePrefix + "ERROR",
};

// const EAuthStateInvalid = {
//   ...IAuthError
// };
const expectedLocations = {
  state: "body",
};
const authStateRequiredMessage =
  "Authentication state is required to complete this request";
const EAuthStateMissing = {
  ...IAuthError,
  MESSAGE: `Parameter state was missing from the request ${expectedLocations.state}`,
  REASON: authStateRequiredMessage,
  CODE: RESPONSE.EMissing.CODE,
  TYPE: typePrefix + "STATE_MISSING",
  PATH: expectedLocations.state,
};
stateMissingMessage = "";
const EAuthStateNotFound = {
  ...IAuthError,
  MESSAGE: ` The given state was not found`,
  REASON: authStateRequiredMessage,
  CODE: RESPONSE.EMissing.CODE,
  TYPE: typePrefix + "STATE_NOT_FOUND",
};
const EAuthIPMissMatch = {
  ...RESPONSE.ENotAuthorized,
  ...IAuthError,
  REASON:
    "You are not allowed to switch devices between " +
    "login / register start and login /register completion",
  TYPE: typePrefix + "STATE_NOT_FOUND",
};
const ELoginRequired = {
  ...RESPONSE.ENotAuthorized,
  ...IAuthError,
  REASON: "Please Log in First",
  TYPE: typePrefix + "LOGIN_REQUIRED",
};
module.exports = {
  IAuthError,
  EAuthStateNotFound,
  EAuthIPMissMatch,
  ELoginRequired,
};
