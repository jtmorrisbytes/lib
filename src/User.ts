interface IName {
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
  constructor(name) {
    super();
    this._isValid = this.validate(name);
    this._value = name;
  }
  validate = function validate(name: string) {
    return name < this.maxLength;
  };
}
// Name.prototype.maxLength = 250;
// Name.prototype.validate =
// };
const validateEmail = require("./validateEmail.js");
interface IEmail {
  validate: Function;
  isValid: boolean;
  value: string;
}
export class Email extends String implements IEmail {
  validate = validateEmail;
  private _email: string;
  private _isValid: boolean;
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
  constructor(email) {
    super();
    this._isValid = this.validate(email);
    this._email = email;
  }
}

interface IPassword {
  validate: Function;
  isValid: boolean;
  value: string;
}
const validatePassword = require("./validatePassword.js");
export class Password extends String implements IPassword {
  private _isValid: boolean = false;
  private _value: string = "";
  get isValid(): boolean {
    return this._isValid;
  }
  get value(): string {
    return this._value;
  }
  set value(password: string) {
    this._isValid = this.validate(password);
    this._value = password;
  }
  constructor(password: string) {
    super();
    this._isValid = this.validate(password);
    this._value = password;
  }
  validate = validatePassword;
}
// type User = {
//   firstName: Name;
//   lastname: Name;
//   email;
// };
interface IUser {
  address: string;
  city: string;
  state: string;
  zip: string;
  readonly isEmailValid: Function;
  readonly isFirstNameValid: Function;
  readonly isLastNameValid: Function;
  readonly isPasswordValid: Function;
}

export class User extends Object implements IUser {
  private _firstName: Name;
  private _lastName: Name;
  private _password: Password;
  private _email: Email;
  address = "";
  city = "";
  state = "";
  zip = "";
  get email(): string {
    return this._email.value;
  }
  set email(email: string) {
    this._email.value = email;
  }
  get firstName(): string {
    return this._firstName.value;
  }
  get lastName(): string {
    return this._lastName.value;
  }
  set lastName(lastName: string) {
    this._lastName.value = lastName;
  }
  get password(): string {
    return this._password.value;
  }
  set password(password: string) {
    this._password.value = password;
  }
  constructor(
    email: string,
    password: string,
    firstName?: string,
    lastName?: string,
    address?: string,
    city?: string,
    state?: string,
    zip?: string
  ) {
    super();
    this._firstName = new Name(firstName);
    this._lastName = new Name(lastName);
    this._password = new Password(password);
    this._email = new Email(email);
    this.address = address;
    this.city = city;
    this.state = state;
    this.zip = zip;
  }
  isEmailValid(): boolean {
    return this._email.isValid;
  }
  isPasswordValid(): boolean {
    return this._password.isValid;
  }
  isFirstNameValid(): boolean {
    return this._firstName.isValid;
  }
  isLastNameValid(): boolean {
    return this._lastName.isValid;
  }
}

export type { IUser, IEmail, IPassword, IName };
