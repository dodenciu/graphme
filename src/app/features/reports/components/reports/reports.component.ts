import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {Chart, ChartConfiguration, ChartData, ChartOptions, ChartType, PluginServiceRegistrationOptions} from 'chart.js';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.scss']
})
export class ReportsComponent implements AfterViewInit, ChartConfiguration {
  @ViewChild('lineChart') private chartRef;

  public chart: Chart;

  data: ChartData = {
    labels: ['x', 'y'],
    datasets: [{
      data: [{
        x: 1,
        y: 10
      }, {
        x: 2,
        y: 20
      }],
      borderColor: '#00AEFF',
      fill: false
    }]
  };

  options: ChartOptions = {
    legend: {
      display: false
    },
    scales: {
      xAxes: [{
        display: true
      }],
      yAxes: [{
        display: true
      }],
    }
  };

  plugins: PluginServiceRegistrationOptions[] = [];
  type: ChartType | string = 'line';

  constructor() {
  }

  ngAfterViewInit(): void {
    this.chart = new Chart(this.chartRef.nativeElement, {
      data: this.data,
      options: this.options,
      type: this.type
    });
  }

}
