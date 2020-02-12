import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts';

import { AppRoutingModule } from './app-routing.module';
import { BarChartModule } from './bar-chart/bar-chart.module';
import { LineChartModule } from './line-chart/line-chart.module';

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
    LineChartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
