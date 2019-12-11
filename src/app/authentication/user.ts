export class User {
  username: String;
  password: String;

  userFirstname: string;
  userLastname: string;

  constructor(username: String, password: String) {
    this.username = username;
    this.password = password;
  }
}
