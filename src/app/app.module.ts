import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { SharedModule } from './shared/shared.module';

import { AppRoutingModule } from './app-routing.module';
import { BarChartModule } from './bar-chart/bar-chart.module';
import { LineChartModule } from './line-chart/line-chart.module';
import { DoughnutChartModule } from './doughnut-chart/doughnut-chart.module';
import { RadarChartModule } from './radar-chart/radar-chart.module';
import { PieChartModule } from './pie-chart/pie-chart.module';
import { BubbleChartModule } from './bubble-chart/bubble-chart.module';

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
    PieChartModule,
    BubbleChartModule,
    NgbModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
