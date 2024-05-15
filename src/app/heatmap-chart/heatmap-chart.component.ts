import {Component} from '@angular/core';
import {BaseChartDirective} from "ng2-charts";
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-heatmap-chart',
  standalone: true,
  imports: [BaseChartDirective],
  templateUrl: './heatmap-chart.component.html',
  styleUrl: './heatmap-chart.component.scss'
})
export class HeatmapChartComponent {
  title = 'ng-chart';
  chart: any = [];


  ngOnInit() {
    this.chart = new Chart('canvas', {
      type: 'radar',
      data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [
          {
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  }
}
