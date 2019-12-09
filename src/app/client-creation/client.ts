export class Client {
  firstName: String;
  lastName: String;
  adress: String;
  birthDate: String;
  gender: String;
  mail: String;

  constructor(
    firstName: String,
    lastName: String,
    adress: String,
    birthDate: String,
    gender: String,
    mail: String
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.adress = adress;
    this.birthDate = birthDate;
    this.gender = gender;
    this.mail = mail;
  }
}
