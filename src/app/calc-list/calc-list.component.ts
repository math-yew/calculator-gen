import { Component, OnInit } from '@angular/core';

import { calcType } from '../calcType';
import { CalculatorsService } from '../calculators.service';

@Component({
  selector: 'app-calc-list',
  templateUrl: './calc-list.component.html',
  styleUrls: ['./calc-list.component.css']
})
export class CalcListComponent implements OnInit {
  calcs:calcType[];

  constructor(private calcService: CalculatorsService) { }

  ngOnInit(): void {
    this.getCalcs();
  }

  getCalcs(): void{
    this.calcService.getCalcs()
      .subscribe(calcs => this.calcs = calcs)
  }

  viewCalc(calc:calcType): void{
    console.log(calc);
  }
}
