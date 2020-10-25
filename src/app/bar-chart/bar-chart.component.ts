import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html'
})
export class BarChartComponent implements OnInit {

  // FIELDS

  public barChartOptions: ChartOptions = { responsive: true, showLines: true };

  public barChartLabels: Label[] = [
    'Manchester United', 'Chelsea', 'Tottenham', 'Arsenal', 'Liverpool',
    'Everton', 'Manchester City', 'Leicester City'
  ];
  public barChartType: ChartType = 'bar';
  public barChartLegend: true;
  public barChartPlugins: [];

  barChartData: ChartDataSets[] = [
    { data: [45, 42, 36, 39, 50, 34, 48, 40], label: 'Points' }
  ];

  // CONSTRUCTOR

  constructor() { }

  // LIFE CYCLE HOOKS

  ngOnInit() {}

}
