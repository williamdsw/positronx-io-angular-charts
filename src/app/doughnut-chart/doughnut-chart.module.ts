import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts';

import { DoughnutChartComponent } from './doughnut-chart.component';

@NgModule({
  declarations: [DoughnutChartComponent],
  imports: [
    ChartsModule
  ]
})
export class DoughnutChartModule { }
