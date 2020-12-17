import { Component, Input, OnInit } from '@angular/core';
//plugin charts
import { ChartType } from 'chart.js';
import { MultiDataSet, Label } from 'ng2-charts';
@Component({
  selector: 'app-graphicdona',
  templateUrl: './graphicdona.component.html',
  styles: [],
})
export class GraphicdonaComponent implements OnInit {
  @Input() doughnutChartLabels: Label[] = [];
  @Input() doughnutChartData: MultiDataSet = [];
  @Input() doughnutChartType: ChartType = 'doughnut';
  @Input() Datos: any;
  constructor() {}

  ngOnInit(): void {}
}
