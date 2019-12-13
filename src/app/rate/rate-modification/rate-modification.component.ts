import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, NgForm } from '@angular/forms';
import { RateService } from 'src/app/services/rate.service';
import { Router } from '@angular/router';
import { Rate } from '../rate';

@Component({
  selector: 'app-rate-modification',
  templateUrl: './rate-modification.component.html',
  styleUrls: ['./rate-modification.component.scss']
})
export class RateModificationComponent implements OnInit {
  rates : any;
  rateTestValue;
  @Input()
  rateArray : {
    rateName: string;
    rateValue: number;
  } 
  rateForm = new FormGroup(
    {
      name: new FormControl(""),
      rate: new FormControl("")
    }
  )

  constructor(private rateService: RateService, private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.rates = window.history.state.allRate;
  }
  submit(rateForm: NgForm) {
    //this.rateTestValue = this.rateForm.get("rate").value;
    //console.log(this.rateTestValue);
    console.log(this.rateForm);
    /*let rateTemp  = new Rate();
    rateTemp.rateName = this.name;
    rateTemp.rateValue = this.rate;
    
    this.rateService.sendRate(rateTemp).subscribe(
      response => {
        console.log(response);
        
      },
      error => {
        console.log(error);
      }
    )*/
  }

}
