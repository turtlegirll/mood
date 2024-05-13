import {Component} from '@angular/core';
import { FormsModule} from '@angular/forms';
import {User} from "../user";
import {UserService} from "../user.service";
import {MatFormField, MatInput} from "@angular/material/input";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatButton} from "@angular/material/button";
import {RouterLink, RouterLinkActive, RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-user',
  standalone: true,
    imports: [
        FormsModule,
        MatInput,
        MatFormField,
        MatFormFieldModule,
        MatButton,
        RouterLink,
      RouterOutlet, RouterLink, RouterLinkActive,
    ],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})
export class UsersComponent {


  user: User = { name: '', description: ''};

  constructor(private userService: UserService,
              ) {
  }

  createUser(){
    console.log(this.user);
    this.userService.createUser(this.user).subscribe({
      next: value => {
        console.log('success');

      },
      error: err => {
        console.log('failed', err);

      }
      }

    )
  }

}
