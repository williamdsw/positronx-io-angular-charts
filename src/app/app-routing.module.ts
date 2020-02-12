import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BarChartComponent } from './bar-chart/bar-chart.component';
import { LineChartComponent } from './line-chart/line-chart.component';

const ROUTES: Routes = [
  { path: 'bar-chart', component: BarChartComponent },
  { path: 'line-chart', component: LineChartComponent },
  { path: '', pathMatch: 'full', redirectTo: 'line-chart' }
];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
