const ERROR = require("../Error");

const IResponse = {
  CODE: 200,
  TYPE: "Response",
  PAYLOAD: {},
};

const IResponseError = {
  ...ERROR.IError,
  CODE: 500,
};

const ENotFound = {
  ...IResponseError,
  MESSAGE: "The requested Resource could not be found",
  REASON: "The Resoure doesnt exist",
  TYPE: "RESOURCE_NOT_FOUND",
  CODE: 404,
};
const EGeneralFailure = {
  ...IResponseError,
  MESSAGE: "Something went wrong on our end",
  REASON: "",
  TYPE: "GENERAL_FAILURE",
  CODE: 500,
};
const EBadRequest = {
  ...IResponseError,
  MESSAGE: "Bad Request",
  REASON: "The client sent a bad request to the server",
  TYPE: "BAD_REQUEST",
  CODE: 400,
};
const ENotAuthorized = {
  ...IResponseError,
  MESSAGE: "The Client is not authorized to perform the request at this time.",
  REASON:
    "Either you are not permitted to access this resource, or you must log in first",
  TYPE: "NOT_AUTHORIZED",
  CODE: 401,
};
const EMissing = {
  ...IResponseError,
  MESSAGE: "A Required Resource is Missing from the request",
  REASON: "",
  TYPE: "RESOURCE_MISSING",
  CODE: 422,
};
// const EEmptyBody = {
//   ...IResponseError,
//   MESSAGE: "Recieved an empty body in request",
// };
module.exports = {
  IResponse,
  IResponseError,
  ENotFound,
  ENotAuthorized,
  EGeneralFailure,
  EBadRequest,
  EMissing,
};
