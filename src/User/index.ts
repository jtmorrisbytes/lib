import { Password } from "./Password";
import { Email } from "./Email";
import { Name } from "./Name";
import { ENotFoundByEmail, ENotFoundById } from "./Errors";

export interface IUser {
  address: string;
  city: string;
  state: string;
  zip: string;
  readonly isEmailValid: Function;
  readonly isFirstNameValid: Function;
  readonly isLastNameValid: Function;
  readonly isPasswordValid: Function;
}
class User extends Object implements IUser {
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
    firstName = firstName || "";
    lastName = lastName || "";
    this._firstName = new Name(firstName);
    this._lastName = new Name(lastName);
    this._password = new Password(password);
    this._email = new Email(email);
    this.address = address || "";
    this.city = city || "";
    this.state = state || "";
    this.zip = zip || "";
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
export { ENotFoundByEmail, ENotFoundById, User };
