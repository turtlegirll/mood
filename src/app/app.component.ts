import {Component} from '@angular/core';
import {Router, RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';
import {UsersComponent} from "./users/users.component";
import {MatIcon} from "@angular/material/icon";
import {MatToolbar} from "@angular/material/toolbar";
import {MatButton, MatIconButton} from "@angular/material/button";
import {
  MatCard,
  MatCardActions,
  MatCardContent,
  MatCardHeader,
  MatCardImage, MatCardSubtitle,
  MatCardTitle
} from "@angular/material/card";
import {MatExpansionPanelTitle} from "@angular/material/expansion";
import {NgIf} from "@angular/common";
import {MoodCardComponent} from "./mood-card/mood-card.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, UsersComponent, MatIcon, MatToolbar, MatIconButton, MatCard, MatCardHeader, MatCardContent, MatCardActions, MatButton, MatCardImage, MatCardTitle, MatCardSubtitle, MatExpansionPanelTitle, NgIf, MoodCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'frontend';

  constructor(private router: Router) {}



}
