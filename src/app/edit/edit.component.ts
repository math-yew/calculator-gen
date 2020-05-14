import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { calcType } from '../calcType';
import { CalculatorsService } from '../calculators.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  calc:calcType;

  constructor(
    private route: ActivatedRoute,
    private calcService: CalculatorsService,
    private location: Location) { }

  ngOnInit(): void {
    this.getCalc();
  }

  getCalc(): void{
    const id = this.route.snapshot.paramMap.get("id");
    this.calcService.getCalc(id)
      .subscribe(calc => this.setVariables(calc));
  }

  setVariables(calc): void{
    this.calc = calc;
  }

  lastView(): void{
    this.location.back();
  }

  updateCalc(): void{
    this.calcService.updateCalc(this.calc);
    // const id = this.route.snapshot.paramMap.get("id");
    // this.calcService.updateCalc(id)
    //   .subscribe(calc => this.setVariables(calc));
  }
}
