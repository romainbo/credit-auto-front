import { Role } from './role.enum';

export class User {
  username: String;
  password: String;
  role: Role;
  isLoginValid = false;

  userFirstname: string;
  userLastname: string;

  constructor(username: String, password: String) {
    this.username = username;
    this.password = password;
  }
}
