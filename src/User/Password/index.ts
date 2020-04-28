export interface IPassword {
  validate: Function;
  isValid: boolean;
  value: string;
  reason: string | null;
  description: string | null;
}
import { PASSWORD } from "@jtmorrisbytes/lib/src/Constants";

export class Password extends String implements IPassword {
  private _reason: string | null = null;
  private _description: string | null = null;
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
  validate(password) {
    // first check the password length
    if (password.length < PASSWORD.LENGTH.MIN) {
      this._reason = PASSWORD.LENGTH.TOO_SHORT.REASON;
      this._description = PASSWORD.LENGTH.TOO_SHORT.DESCRIPTION;
    } else if (password.length > PASSWORD.LENGTH.MAX) {
      this._reason = PASSWORD.LENGTH.TOO_LONG.REASON;
      this._description = PASSWORD.LENGTH.TOO_LONG.DESCRIPTION;
    } else if (PASSWORD.REQUIRED.CHARACTERS.REGEX.test(password) === false) {
      console.log("checking password for basic characters");

      this._reason = PASSWORD.REQUIRED.CHARACTERS.MISSING.REASON;
      this._description = PASSWORD.REQUIRED.CHARACTERS.MISSING.DESCRIPTION;
    } else if (
      PASSWORD.REQUIRED.SPECIAL_CHARACTERS.REGEX.test(password) === false
    ) {
      this._reason = PASSWORD.REQUIRED.SPECIAL_CHARACTERS.MISSING.REASON;
      this._description =
        PASSWORD.REQUIRED.SPECIAL_CHARACTERS.MISSING.DESCRIPTION;
    } else {
      this._isValid = true;
    }
  }
}
