import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements OnInit {

  // FIELDS

  barChartOptions: ChartOptions = {
    responsive: true,
    showLines: true
  };

  barChartLabels: Label[] = ['Manchester United', 'Chelsea', 'Tottenham', 'Arsenal', 'Liverpool', 'Everton', 'Manchester City', 'Leicester City'];
  barChartType: ChartType = 'bar';
  barChartLegend: boolean = true;
  barChartPlugins: [];

  barChartData: ChartDataSets[] = [
    { data: [45, 42, 36, 39, 50, 34, 48, 40], label: 'Best Clubs' }
  ];

  // CONSTRUCTOR

  constructor() { }

  // LIFE CYCLE HOOKS 

  ngOnInit() {
  }

}
