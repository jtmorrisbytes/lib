const IEmail = {
  validate: Function,
  isValid: false,
  value: string,
};
const { EBadRequest, EMissing, ENotAuthorized } = require("./Errors");
function validate(email = "") {
  return this.regex.test(email);
}
const regex = /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
function Email(email = "") {
  if (typeof email !== "string") {
    email = "";
  }
  let value = "";
  let isValid = validate(email);
  return {
    value,
    isValid,
    regex,
  };
}
Email.prototype.validate = validate;
module.exports = { Email, EBadRequest, EMissing, ENotAuthorized };
