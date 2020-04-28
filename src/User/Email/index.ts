export interface IEmail {
  validate: Function;
  isValid: boolean;
  value: string;
}
export class Email extends String implements IEmail {
  // below regex credits to http://regexlib.com/REDetails.aspx?regexp_id=26
  private _regex: RegExp = /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
  private _email: string;
  private _isValid: boolean;
  get regex(): RegExp {
    return this._regex;
  }
  set value(email: string) {
    this._isValid = this.validate(email);
    this._email = email;
  }
  get value(): string {
    return this._email;
  }
  get isValid(): boolean {
    return this._isValid;
  }
  constructor(email: string) {
    super();
    this._isValid = this.validate(email);
    this._email = email;
  }

  validate(email: string) {
    return this.regex.test(email);
  }
}
