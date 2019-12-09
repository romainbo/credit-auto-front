export class Client {
  firstName: String;
  lastName: String;
  adress: String;
  birthDate: String;
  gender: String;
  email: String;

  constructor(
    firstName: String,
    lastName: String,
    adress: String,
    birthDate: String,
    gender: String,
    email: String
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.adress = adress;
    this.birthDate = birthDate;
    this.gender = gender;
    this.email = email;
  }
}
