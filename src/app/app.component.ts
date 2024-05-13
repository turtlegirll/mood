import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {UsersComponent} from "./users/users.component";
import {UserService} from "./user.service";
import {HttpClient} from "@angular/common/http";
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
  imports: [RouterOutlet, UsersComponent, MatIcon, MatToolbar, MatIconButton, MatCard, MatCardHeader, MatCardContent, MatCardActions, MatButton, MatCardImage, MatCardTitle, MatCardSubtitle, MatExpansionPanelTitle, NgIf, MoodCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  constructor(private userService: UserService,
              private httpClient: HttpClient
  ) {
  }

  title = 'frontend';
}
