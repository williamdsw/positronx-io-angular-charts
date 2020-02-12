import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType, ChartPluginsOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent implements OnInit {

  // FIELDS

  lineChartLabels: Label[] = ['Manchester United', 'Chelsea', 'Tottenham', 'Arsenal', 'Liverpool', 'Everton', 'Manchester City', 'Leicester City'];
  lineChartData: ChartDataSets[] = [
    { data: [45, 42, 36, 39, 50, 34, 48, 40], label: 'Best Clubs' }
  ];

  lineChartOptions: ChartOptions = {
    responsive: true
  };

  lineChartColors: Color[] = [
    {
      borderColor: 'black',
      backgroundColor: 'rgba(255, 255, 0, 0 ,0.28)'
    },
  ];

  lineChartLegend: boolean = true;
  lineChartPlugins: ChartPluginsOptions[] = [];
  lineChartType: ChartType = 'line';

  // CONSTRUCTOR

  constructor() { }

  // LIFE CYCLE HOOKS 

  ngOnInit() {
  }

}
