import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { calcType } from './calcType';
import { SAMPLECALCS } from './sample-calcs';

@Injectable({
  providedIn: 'root'
})
export class CalculatorsService {

  constructor() { }

  getCalcs(): Observable<calcType[]>{
    return of(SAMPLECALCS);
  }

  getCalc(id:number): Observable<calcType>{
    console.log("id service: " + id);
    console.log("SAMPLECALCS: " + SAMPLECALCS.map(calc => calc.id));
    return of (SAMPLECALCS.find(calc => calc.id === id))
  }
}
