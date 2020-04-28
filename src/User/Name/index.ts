export interface IName {
  maxLength: number;
  validate: Function;
  value: string;
  isValid: boolean;
}
export class Name extends String implements IName {
  maxLength = 250;
  private _value = "";
  private _isValid: boolean = false;
  get isValid(): boolean {
    return this._isValid;
  }
  get value(): string {
    return this._value;
  }
  set value(value: string) {
    this._isValid = this.validate(name);
    this._value = value;
  }
  constructor(name: string) {
    super();
    this._isValid = this.validate(name);
    this._value = name;
  }
  validate(name: string) {
    return name.length < this.maxLength;
  }
}
