import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CalcListComponent }   from './calc-list/calc-list.component';
import { CalculatorComponent }      from './calculator/calculator.component';
import { EditComponent }  from './edit/edit.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'calcList', component: CalcListComponent },
  { path: 'calculator/:id', component: CalculatorComponent },
  { path: 'edit', component: EditComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
