import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType, ChartPluginsOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html'
})
export class LineChartComponent implements OnInit {

  // FIELDS

  public lineChartLabels: Label[] = [
    'Manchester United', 'Chelsea', 'Tottenham', 'Arsenal', 'Liverpool', 
    'Everton', 'Manchester City', 'Leicester City'
  ];
  public lineChartData: ChartDataSets[] = [
    { data: [45, 42, 36, 39, 50, 34, 48, 40], label: 'Points' }
  ];

  public lineChartOptions: ChartOptions = { responsive: true };

  public lineChartColors: Color[] = [
    {
      borderColor: 'black',
      backgroundColor: 'rgba(255, 255, 0, 0 ,0.28)'
    },
  ];

  public lineChartLegend = true;
  public lineChartPlugins: ChartPluginsOptions[] = [];
  public lineChartType: ChartType = 'line';

  // CONSTRUCTOR

  constructor() { }

  // LIFE CYCLE HOOKS

  ngOnInit() {}

}
