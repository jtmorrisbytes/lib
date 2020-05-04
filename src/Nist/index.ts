import Response from "../Response";

export const ENist = {
  ...Response.EBadRequest,
  MESSAGE: "That password is not allowed as it has been compromised elsewhere",
  TYPE: "PASSWORD_COMPROMISED",
};
export const NIST = {
  URL: "https://api.badpasswordcheck.com/check/",
  INFOLINK: "https://pages.nist.gov/800-63-3/",
};
