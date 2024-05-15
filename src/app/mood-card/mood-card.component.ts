import { Component } from '@angular/core';
import {MatButton, MatFabButton} from "@angular/material/button";
import {
  MatCard,
  MatCardActions,
  MatCardContent,
  MatCardHeader,
  MatCardMdImage,
  MatCardTitle
} from "@angular/material/card";
import {MatIcon} from "@angular/material/icon";
import {NgIf} from "@angular/common";
import {MatTooltip} from "@angular/material/tooltip";
import {MatList, MatListItem} from "@angular/material/list";
import {HeatmapChartComponent} from "../heatmap-chart/heatmap-chart.component";
import {SleepChartComponent} from "../sleep-chart/sleep-chart.component";
import {MatGridList, MatGridTile} from "@angular/material/grid-list";
import {Router, RouterLink} from "@angular/router";

@Component({
  selector: 'app-mood-card',
  standalone: true,
  imports: [
    MatButton,
    MatCard,
    MatCardActions,
    MatCardContent,
    MatCardHeader,
    MatCardTitle,
    MatIcon,
    NgIf,
    MatFabButton,
    MatTooltip,
    MatCardMdImage,
    MatListItem,
    MatList,
    HeatmapChartComponent,
    SleepChartComponent,
    MatGridList,
    MatGridTile,
    RouterLink
  ],
  templateUrl: './mood-card.component.html',
  styleUrl: './mood-card.component.scss'
})
export class MoodCardComponent {
  mood_tracked: boolean;
  constructor(private router: Router) {
    this.mood_tracked = false;
  }

  navigateToCreateUser() {
    this.router.navigate(['/log-mood']);
  }

}
