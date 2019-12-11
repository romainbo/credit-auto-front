import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";
import { Router } from "@angular/router";
import { LoginService } from "src/app/services/login.service";
import { User } from "../user";

@Component({
  selector: "app-forms-login",
  templateUrl: "./forms-login.component.html",
  styleUrls: ["./forms-login.component.scss"]
})
export class FormsLoginComponent implements OnInit {
  username: string;
  password: string;
  user: User;
  isloginInformationValid = false;

  loginForm = new FormGroup({
    username: new FormControl(""),
    password: new FormControl("")
  });

  constructor(
    private router: Router,
    private clientCreationService: LoginService
  ) {}

  ngOnInit() {}

  submit() {
    this.username = this.loginForm.get("username").value;
    this.password = this.loginForm.get("password").value;
    console.log(this.username, this.password);

    this.user = new User(this.username, this.password);

    this.clientCreationService
      .postInformationLogin(this.user)
      .subscribe(response => {
        if (response) {
          this.isloginInformationValid = true;
        }
        if (this.isloginInformationValid) {
          this.router.navigate(["./admin"]);
        }
        console.log(response);
      });
  }

  cancel() {
    this.loginForm.reset();
    this.router.navigate(["./searchclient"]);
  }
}
