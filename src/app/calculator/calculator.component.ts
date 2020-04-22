import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { calcType } from '../calcType';
import { CalculatorsService } from '../calculators.service';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  calc: calcType;

  constructor(
    private route: ActivatedRoute,
    private calcService: CalculatorsService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getCalc();
  }

  getCalc(): void{
    const id = this.route.snapshot.paramMap.get("id");
    this.calcService.getCalc(id)
      .subscribe(calc => this.calc = calc);
  }
}
