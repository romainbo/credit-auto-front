import { Component, OnInit } from '@angular/core';
import { Contract } from 'src/app/contract/contract';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { StatisticsService } from 'src/app/services/statistics.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss']
})
export class StatisticsComponent implements OnInit {
  startDate: string;
  endDate: string;
  contractsList = [];
  dates = [];

  statisticsForm = new FormGroup({
    startDate: new FormControl(''),
    endDate: new FormControl('')
  });

  constructor(
    private statisticsService: StatisticsService,
    private router: Router
  ) {}

  ngOnInit() {}

  submit() {
    this.startDate = this.statisticsForm.get('startDate').value;
    this.endDate = this.statisticsForm.get('endDate').value;
    console.log(this.startDate, this.endDate);

    this.dates.push(this.startDate, this.endDate);
    console.log(this.dates);

    this.statisticsService
      .postDatesForStatistics(this.dates)
      .subscribe(response => {
        console.log('reponse :', response);
        for (const el in response) {
          if (el) {
            this.contractsList.push(el);
          }
        }

        console.log('reponse :', this.contractsList);
        // this.contractsList.push(response[0], response[);
      });
  }

  cancel() {
    this.statisticsForm.reset();
    this.router.navigate(['./statistics']);
  }
}
