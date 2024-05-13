import { Component } from '@angular/core';
import {MatButton} from "@angular/material/button";
import {MoodCardComponent} from "../mood-card/mood-card.component";
import {Router} from "@angular/router";

@Component({
  selector: 'app-homepage',
  standalone: true,
    imports: [
        MatButton,
        MoodCardComponent
    ],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss'
})
export class HomepageComponent {
  constructor(private router: Router) {}

  navigateToCreateUser() {
    this.router.navigate(['/log-mood']);
  }
}
