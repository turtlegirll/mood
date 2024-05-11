import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {UsersComponent} from "./users/users.component";
import {UserService} from "./user.service";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, UsersComponent],
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
