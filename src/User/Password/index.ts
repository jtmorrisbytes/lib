import {
  ENotAuthorized,
  ETooLong,
  ETooShort,
  EMissing,
  EReqCharsMissing,
  EReqSpecCharsMissing,
} from "./Errors";
import { Error } from "../../Error/";
import { NIST } from "../../Nist";
interface IPassword {
  validate: Function;
  isValid: boolean;
  value: string;
  error:
    | ETooShort
    | ETooLong
    | EMissing
    | EReqCharsMissing
    | EReqSpecCharsMissing
    | NIST.ENist
    | Error.EmptyError;
  readonly MAX_LENGTH: number;
  readonly ReqChars: RegExp;
  readonly ReqSpecChars: RegExp;
}

class Password extends String implements IPassword {
  MAX_LENGTH = 64;
  MIN_LENGTH = 8;
  ReqChars = /[a-zA-Z0-9]+/;
  ReqSpecChars = /\!|\@|\#|\$|\%|\^|\&|\*|\(|\)|\_|\-|\+|\=|\\|\||\,|\<|\.|\>|\?|\//;
  error = new Error.EmptyError();
  private _reason: string = "";
  private _description: string = "";
  private _isValid: boolean = false;
  private _value: string = "";
  get isValid(): boolean {
    return this._isValid;
  }
  get value(): string {
    return this._value;
  }
  get reason(): string {
    return this._reason;
  }
  get description(): string {
    return this._description;
  }
  set value(password: string) {
    this._value = password;
    this.validate(password);
  }
  constructor(password: string) {
    super();
    this._value = password;
    this.validate(password);
  }
  validate(password: string) {
    // first check the password length
    if (password === null) {
      this.error = new EMissing();
    } else if (password.length < this.MIN_LENGTH) {
      this.error = new ETooShort();
    } else if (password.length > this.MAX_LENGTH) {
      this.error = new ETooLong();
    } else if (this.ReqChars.test(password) === false) {
      console.log("checking password for basic characters");
      this.error = new EReqCharsMissing();
    } else if (this.ReqSpecChars.test(password) === false) {
      this.error = new EReqSpecCharsMissing();
    } else {
      this._isValid = true;
    }
  }
}
export type { IPassword };
export {
  Password,
  ETooLong,
  ETooShort,
  EReqCharsMissing,
  EReqSpecCharsMissing,
  EMissing,
  ENotAuthorized,
  ENotValid,
};
