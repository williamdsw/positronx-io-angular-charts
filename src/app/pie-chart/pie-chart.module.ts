import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts';

import { PieChartComponent } from './pie-chart.component';

@NgModule({
  declarations: [PieChartComponent],
  imports: [
    ChartsModule
  ]
})
export class PieChartModule { }
