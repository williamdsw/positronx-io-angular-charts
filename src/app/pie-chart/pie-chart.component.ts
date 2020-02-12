import { Component, OnInit } from '@angular/core';
import { ChartType, ChartOptions } from 'chart.js';
import {
  SingleDataSet,
  Label,
  monkeyPatchChartJsLegend,
  monkeyPatchChartJsTooltip
} from 'ng2-charts';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent implements OnInit {

  // FIELDS

  public pieChartsLabels: Label[] = ['Capcom', 'Konami', 'Bandai', 'Sony'];
  public pieChartData: SingleDataSet = [50, 42, 30, 48];
  public pieChartType: ChartType = 'pie';
  public pieChartLegend: boolean = true;
  public pieChartOptions: ChartOptions = {
    responsive: true
  };
  public pieChartPlugins = [];

  // CONSTRUCTOR

  constructor() {
    monkeyPatchChartJsTooltip ();
    monkeyPatchChartJsLegend ();
   }

  // LIFE CYCLE HOOKS 

  ngOnInit() {
  }

}
