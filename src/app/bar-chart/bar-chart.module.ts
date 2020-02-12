import { NgModule } from '@angular/core';
import { BarChartComponent } from './bar-chart.component';

import { ChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [BarChartComponent],
  imports: [ChartsModule]
})
export class BarChartModule { }
