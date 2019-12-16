import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { User } from '../user';
import { IsSignedInGuard } from '../is-signed-in.guard';
import { Role } from '../role.enum';

@Component({
  selector: 'app-forms-login',
  templateUrl: './forms-login.component.html',
  styleUrls: ['./forms-login.component.scss']
})
export class FormsLoginComponent implements OnInit {
  username: string;
  password: string;
  user: User;
  isSignedInGuard: IsSignedInGuard;

  loginForm = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });

  constructor(
    private router: Router,
    private clientCreationService: LoginService
  ) {}

  ngOnInit() {}

  submit() {
    this.username = this.loginForm.get('username').value;
    this.password = this.loginForm.get('password').value;
    console.log(this.username, this.password);

    this.user = new User(this.username, this.password);

    this.clientCreationService.postLogin(this.user).subscribe(response => {
      console.log(response);
      if (response) {
        this.clientCreationService.isLoginValid = true;
        // this.user.isLoginValid = true;
        this.user.role = (response as unknown) as Role;
        this.clientCreationService.role = this.user.role;
        this.router.navigate(['./simulation']);
      }
    });
  }

  cancel() {
    this.loginForm.reset();
    this.router.navigate(['./searchclient']);
  }
}
