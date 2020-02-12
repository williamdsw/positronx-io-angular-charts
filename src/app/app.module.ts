import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts';

import { AppRoutingModule } from './app-routing.module';
import { BarChartModule } from './bar-chart/bar-chart.module';
import { LineChartModule } from './line-chart/line-chart.module';
import { DoughnutChartModule } from './doughnut-chart/doughnut-chart.module';
import { RadarChartModule } from './radar-chart/radar-chart.module';
import { PieChartModule } from './pie-chart/pie-chart.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartsModule,
    BarChartModule,
    LineChartModule,
    DoughnutChartModule,
    RadarChartModule,
    PieChartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
