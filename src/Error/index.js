const IError = {
  MESSAGE: "",
  REASON: "",
  TYPE: "CLASSNAME_TYPE",
};
const FAILURE_MESSAGE = "Could not complete request";
const ESyntaxError = {
  ...IError,
  MESSAGE: FAILURE_MESSAGE,
  REASON: "A Syntax Error Occurred",
  TYPE: "SYNTAX_ERROR",
};
const EUnknownError = {
  ...IError,
  MESSAGE: FAILURE_MESSAGE,
  REASON: "An Unknown Error Occurred",
  TYPE: "UNKOWN_ERROR",
};
const ETypeError = {
  ...IError,
  MESSAGE: FAILURE_MESSAGE,
  REASON: "A Type Error Occurred",
  TYPE: "TYPE_ERROR",
};
const EReferenceError = {
  ...IError,
  MESSAGE: "Could not complete request due to a Reference Error",
  REASON: "A Reference Error occurred",
  TYPE: "REFERENCE_ERROR",
};
module.exports = {
  IError,
  ESyntaxError,
  EUnknownError,
  ETypeError,
  EReferenceError,
};
