import { Routes } from '@angular/router';
import {CreateMoodComponent} from "./create-mood/create-mood.component";

import {HomepageComponent} from "./homepage/homepage.component";

export const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'log-mood', component: CreateMoodComponent },
];
