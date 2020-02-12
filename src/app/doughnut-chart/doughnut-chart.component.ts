import { Component, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';
import { MultiDataSet, Label } from 'ng2-charts';

@Component({
  selector: 'app-doughnut-chart',
  templateUrl: './doughnut-chart.component.html',
  styleUrls: ['./doughnut-chart.component.css']
})
export class DoughnutChartComponent implements OnInit {

  // FIELDS

  doughnugChartLabels: Label[] = ['PS4', 'Xbox One', 'PC', 'Nintendo Switch'];
  doughnugChartData: MultiDataSet = [
    [30, 29, 19, 40]
  ];
  doughnugChartType: ChartType = 'doughnut';

  // CONSTRUCTOR

  constructor() { }

  // LIFE CYCLE HOOKS 

  ngOnInit() {
  }

}
