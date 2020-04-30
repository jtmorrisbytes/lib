export interface IName {
  maxLength: number;
  validate: Function;
  value: string;
  isValid: boolean;
  toString: FunctionConstructor;
}
export class Name extends Object implements IName {
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
    value = value || "";
    this._isValid = this.validate(value);
    this._value = value;
  }
  constructor(name?: string) {
    super();
    name = name || "";
    this._value = name;
    this._isValid = this.validate(name);
  }
  validate(name?: string) {
    if (name == null) {
      return false;
    } else {
      return name.length < this.maxLength;
    }
  }
}
Name.prototype.toString = function (): string {
  return this.value;
};
