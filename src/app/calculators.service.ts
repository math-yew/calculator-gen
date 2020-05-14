import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

import { calcType } from './calcType';
import { SAMPLECALCS } from './sample-calcs';

@Injectable({
  providedIn: 'root'
})
export class CalculatorsService {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  // getCalcs(): Observable<calcType[]>{
  //   return of(SAMPLECALCS);
  // }

  getCalcs(): Observable<calcType> {
  return this.http.get<calcType>("http://localhost:3003/allResults")
    .pipe(
      tap(_ => this.log('potato')),
      catchError(this.handleError<calcType>('getCalcs', []))
    );
  }

  updateCalc (calc: calcType): Observable<any> {
    return this.http.put("http://localhost:3003/updateCalc", calc, this.httpOptions).pipe(
      tap(_ => this.log(`updated calc id=${calc.id}`)),
      catchError(this.handleError<any>('updateCalc'))
    );
  }


  // return this.http.request("GET","http://localhost:3002/allResults",{responseType:"json",params}).map(data => _.values(data))
            // .do(console.log);

  getCalc(id:number): Observable<calcType>{
    return of(SAMPLECALCS.find(calc => calc.id == id));
  }

  private handleError<T> (operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {
    console.error(error);
    this.log(`${operation} failed: ${error.message}`);
    return of(result as T);
  };
}

  private log(message: string) {
    // this.messageService.add(`HeroService: ${message}`);
    console.log("log: " + message);
  }

}
