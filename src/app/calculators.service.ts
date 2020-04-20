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
}
