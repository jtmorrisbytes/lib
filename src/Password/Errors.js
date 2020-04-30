const RESPONSE = require("../Response");
const IPasswordError = {
  ...RESPONSE.IResponseError,
};

const ETooShort = {
  ...RESPONSE.EBadRequest,
  MESSAGE: "Password is too short. ",
  REASON: " ",
  TYPE: "PASSWORD_TOO_SHORT ",
};
const ETooLong = {
  ...RESPONSE.EBadRequest,
  TYPE: "PASSWORD_TOO_LONG ",
  REASON: " ",
  MESSAGE: "Password is too long ",
};
const EReqCharsMissing = {
  ...RESPONSE.EBadRequest,
  TYPE: "MISSING_REQUIRED_CHARACTERS ",
  REASON: " ",
  MESSAGE: "Password is required to have at least one special character ",
};
const EReqSpecCharsMissing = {
  ...RESPONSE.EBadRequest,
  TYPE: "MISSING_REQUIRED_SPECIAL_CHARACTERS ",
  REASON: " ",
  MESSAGE:
    "Password is required to have one of the following characters: !@#$%^&*()_+=\\/,.<> ",
};
const EMissing = {
  ...RESPONSE.EMissing,
  MESSAGE: "Password was missing from req ",
  REASON: " ",
  TYPE: "PASSWORD_MISSING ",
};
const ENotAuthorized = {
  ...RESPONSE.ENotAuthorized,
  MESSAGE: "Password does not match our records ",
  REASON: " ",
  TYPE: "PASSWORD_INCORRECT ",
};
const ENotValid = {
  ...RESPONSE.EBadRequest,
  MESSAGE: "Invalid Password ",
  REASON: "Password did not meet validation requirements ",
  TYPE: "PASSWORD_INVALID ",
};
module.exports = {
  ETooShort,
  ETooLong,
  EReqCharsMissing,
  EReqSpecCharsMissing,
  EMissing,
  ENotAuthorized,
  ENotValid,
};
