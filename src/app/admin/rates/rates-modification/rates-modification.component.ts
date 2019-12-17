import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, NgForm } from '@angular/forms';
import { RateService } from 'src/app/services/rate.service';
import { Router } from '@angular/router';
import { isEmpty } from 'rxjs/operators';
import { Rate } from '../rate';



@Component({
  selector: 'app-rates-modification',
  templateUrl: './rates-modification.component.html',
  styleUrls: ['./rates-modification.component.scss']
})
export class RatesModificationComponent implements OnInit {
  rates : any;
  rateFormValue;
  rateName: string;
  rateValue: number;
  rateObject: Rate;
  rateId: number;
  rateForm = new FormGroup(
    {
      name: new FormControl(""),
      rate: new FormControl("")
    }
  );
  /*@Input()
  rateArray : {
    rateName: string;
    rateValue: number;
  } */
  

  constructor(private rateService: RateService, private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.rateName = window.history.state.rateName;
    this.rateValue = window.history.state.rateValue;
    this.rateId = window.history.state.rateId;


  }
  submit(rateForm: NgForm) {
    this.rateFormValue = this.rateForm.get("rate").value;
    if(this.rateForm) {
      this.rateObject = new Rate();
      this.rateObject.rateName = this.rateName;
      this.rateObject.rateValue = this.rateFormValue;
      this.rateObject.id = this.rateId;

      console.log(this.rateObject);

      this.rateService.sendRate(this.rateObject).subscribe(
        response => {
          console.log(response);
          this.router.navigateByUrl('rates');
        },
        error => {
          console.log(error);
        }
      );
    }
  }

}
