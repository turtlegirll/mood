import { Component } from '@angular/core';
import Chart from "chart.js/auto";

@Component({
  selector: 'app-sleep-chart',
  standalone: true,
  imports: [],
  templateUrl: './sleep-chart.component.html',
  styleUrl: './sleep-chart.component.scss'
})
export class SleepChartComponent {

  title = 'ng-chart';
  chart: any = [];


  ngOnInit() {
    this.chart = new Chart('sleep_canvas', {
      type: 'bar',
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
