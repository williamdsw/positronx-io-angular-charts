import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BarChartComponent } from './bar-chart/bar-chart.component';

const ROUTES: Routes = [
  { path: 'bar-chart', component: BarChartComponent },
  { path: '', pathMatch: 'full', redirectTo: 'bar-chart' }
];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
