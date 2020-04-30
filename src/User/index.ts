import { ENotFoundByEmail, ENotFoundById } from "./Errors";

interface IUser {
  address: string;
  city: string;
  state: string;
  zip: string;
  email: string;
  password: string;
}

export { ENotFoundByEmail, ENotFoundById, IUser };
