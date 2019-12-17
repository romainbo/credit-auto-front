import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { RateService } from 'src/app/services/rate.service';
import { Router } from '@angular/router';
import { Rate } from '../rate';

@Component({
  selector: 'app-rate',
  templateUrl: './rate.component.html',
  styleUrls: ['./rate.component.scss']
})
export class RateComponent implements OnInit {
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
