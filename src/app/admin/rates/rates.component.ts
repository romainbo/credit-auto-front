import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { FormGroup, FormControl } from '@angular/forms';
import { RateService } from 'src/app/services/rate.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rates',
  templateUrl: './rates.component.html',
  styleUrls: ['./rates.component.scss']
})
export class RatesComponent implements OnInit {
  name: string;
  rate: number;
  rateArray: any;

 rateForm = new FormGroup(
    {
      name: new FormControl(""),
      rate: new FormControl("")
    }
  )
  constructor(private rateService: RateService, private router: Router) { }

  ngOnInit() {
    this.rateService.getAllRate().subscribe(returnedRate => this.rateArray = returnedRate);
    console.log(this.rateArray);
  }
}
