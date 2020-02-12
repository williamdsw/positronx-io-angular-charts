import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts';

import { RadarChartComponent } from './radar-chart.component';

@NgModule({
  declarations: [RadarChartComponent],
  imports: [
    ChartsModule
  ]
})
export class RadarChartModule { }
