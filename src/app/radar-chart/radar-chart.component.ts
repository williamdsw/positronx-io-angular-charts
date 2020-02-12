import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartType, RadialChartOptions } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-radar-chart',
  templateUrl: './radar-chart.component.html',
  styleUrls: ['./radar-chart.component.css']
})
export class RadarChartComponent implements OnInit {

  // FIELDS

  public radarChartLabels: Label[] = ['Shoot', 'Sprint', 'Stamina', 'Cross', 'Pass', 'Strength', 'Header'];
  public radarChartData: ChartDataSets[] = [ { data: [5, 4, 3.5, 2, 3.5, 4.5, 6], label: 'Skills' } ];
  public radarChartType: ChartType = 'radar';
  public radarChartOptions: RadialChartOptions = {
    responsive: true,
  };

  // CONSTRUCTOR

  constructor() { }

  // LIFE CYCLE HOOKS 

  ngOnInit() {
  }

}
