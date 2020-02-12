import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BarChartComponent } from './bar-chart/bar-chart.component';
import { LineChartComponent } from './line-chart/line-chart.component';
import { DoughnutChartComponent } from './doughnut-chart/doughnut-chart.component';
import { RadarChartComponent } from './radar-chart/radar-chart.component';
import { PieChartComponent } from './pie-chart/pie-chart.component';

const ROUTES: Routes = [
  { path: 'bar-chart', component: BarChartComponent },
  { path: 'line-chart', component: LineChartComponent },
  { path: 'doughnut-chart', component: DoughnutChartComponent },
  { path: 'radar-chart', component: RadarChartComponent },
  { path: 'pie-chart', component: PieChartComponent },
  { path: '', pathMatch: 'full', redirectTo: 'pie-chart' }
];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
