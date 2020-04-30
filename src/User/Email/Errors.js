const RESPONSE = require("../../Response");

const EMissing = {
  ...RESPONSE.EMissing,
  MESSAGE: "Field Email was missing on request",
  TYPE: "EMAIL_REQUIRED",
};
const EInvalid = {
  ...RESPONSE.EBadRequest,
  MESSAGE: "Field Email is Invalid",
  TYPE: "EMAIL_INVALID",
};
const ENotAuthorized = {
  ...RESPONSE.ENotAuthorized,
  MESSAGE: "The povided Email Already Exists",
  TYPE: "EMAIL_TAKEN",
};
module.exports = { EMissing, EInvalid, ENotAuthorized };
