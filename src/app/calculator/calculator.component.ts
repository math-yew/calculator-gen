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
  equation: object;
  variables: Array<string>;

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
      .subscribe(calc => this.setVariables(calc));
  }

  setVariables(calc): void{
    this.calc = calc;
    this.equation = {calc: calc.calc};
    let arr = this.equation.calc.match(/([A-z]+|\=)/g);
    let lastIndex = arr.indexOf("=");
    let variables = arr.slice(0,lastIndex);
    variables.map(v=>this.equation[v]=0);
    this.equation.variables = variables;
    this.equation.resultName = arr[arr.length-1];
    let obj = this.equation;
    for(let key in obj){
      console.log(key + ": " + obj[key]);
    }
  }

  calculate(): void{
    let eq = this.equation;
    let calc = eq.calc.replace(/\=.*/g,"");
    let variables = eq.variables;
    variables.map(vari=>calc=calc.replace(vari,eq[vari]));
    console.log("CALC: " + calc);
    this.equation.result = eval(calc);
  }

  lastView(): void{
    this.location.back();
  }

}
