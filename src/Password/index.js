const {
  ENotAuthorized,
  ETooLong,
  ETooShort,
  EMissing,
  EReqCharsMissing,
  EReqSpecCharsMissing,
  IPasswordError,
} = require("./Errors");
function validate(password = "") {
  // first check the password length
  let o = { isValid: false, error: null };
  if (password === null) {
    o.error = EMissing;
  } else if (password.length < this.MIN_LENGTH) {
    o.error = ETooShort;
  } else if (password.length > this.MAX_LENGTH) {
    o.error = ETooLong;
  } else if (IPassword.ReqChars.test(password) === false) {
    console.log("checking password for basic characters");
    o.error = EReqCharsMissing;
  } else if (IPassword.ReqSpecChars.test(password) === false) {
    o.error = EReqSpecCharsMissing;
  } else {
    o.isValid = true;
  }
  return o;
}

const IPassword = {
  validate: Function,
  isValid: false,
  value: "",
  error: IPasswordError,
  MAX_LENGTH: 64,
  MIN_LENGTH: 8,
  ReqChars: /[a-zA-Z0-9]+/,
  ReqSpecChars: /\!|\@|\#|\$|\%|\^|\&|\*|\(|\)|\_|\-|\+|\=|\\|\||\,|\<|\.|\>|\?|\//,
};

function Password(password = "") {
  const MAX_LENGTH = IPassword.MAX_LENGTH;
  const MIN_LENGTH = IPassword.MAX_LENGTH;

  let _error = { ...IPasswordError };
  let _value = password;
  let _isValid = false;
  if (typeof _value !== "string") {
    _value = "";
  }
  return {
    get isValid() {
      return _isValid;
    },
    set isValid(value) {
      throw new ReferenceError(
        "Cannot set property 'isValid' of type Password"
      );
    },
    toString() {
      return _value;
    },
    valueOf() {
      return _value;
    },
    get value() {
      return _value;
    },
    set value(newValue = "") {
      if (typeof newValue !== "string") {
        _value = "";
      } else {
        _value = newValue;
      }
      vRes = validate(value);
      _error = vRes.error;
      isValid = vRes.isValid;
    },
  };
}
// Password.validate = validate;
module.exports = {
  Password,
  ETooLong,
  ETooShort,
  EReqCharsMissing,
  EReqSpecCharsMissing,
  EMissing,
  ENotAuthorized,
};
