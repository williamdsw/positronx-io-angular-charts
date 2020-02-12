import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts';

import { BubbleChartComponent } from './bubble-chart.component';

@NgModule({
  declarations: [BubbleChartComponent],
  imports: [
    ChartsModule
  ]
})
export class BubbleChartModule { }
