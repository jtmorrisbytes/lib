const IEmail = {
  validate: Function,
  isValid: false,
  value: "",
  toString: Function,
};
const { EBadRequest, EMissing, ENotAuthorized } = require("./Errors");
function validate(email = "") {
  return regex.test(email);
}
const regex = /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
function Email(email = "") {
  if (typeof email !== "string") {
    email = "";
  }
  let _value = email;
  return {
    get value() {
      return _value;
    },
    set value(newValue = "") {
      if (typeof value !== "string") {
        _value == "";
      } else {
        _value = newValue;
      }
    },
    get isValid() {
      return validate(_value);
    },
    set isValid(value) {},
    regex,
    toString() {
      return _value;
    },
  };
}
Email.prototype.validate = validate;
// Email.prototype.toString = function(){r}
module.exports = { Email, EBadRequest, EMissing, ENotAuthorized };
