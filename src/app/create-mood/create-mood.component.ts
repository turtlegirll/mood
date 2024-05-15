import { Component } from '@angular/core';
import {MatGridList, MatGridTile, MatGridTileText} from "@angular/material/grid-list";
import {MatCard, MatCardContent, MatCardHeader, MatCardTitle} from "@angular/material/card";
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {format} from "date-fns";
import {
  MatAccordion,
  MatExpansionPanel,
  MatExpansionPanelDescription, MatExpansionPanelHeader,
  MatExpansionPanelTitle
} from "@angular/material/expansion";
import {MatSlider, MatSliderThumb} from "@angular/material/slider";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-create-mood',
  standalone: true,
  imports: [
    MatGridList,
    MatGridTile,
    MatGridTileText,
    MatCard,
    MatCardTitle,
    MatCardContent,
    MatFormField,
    MatInput,
    MatLabel,
    MatCardHeader,
    MatExpansionPanelDescription,
    MatExpansionPanelTitle,
    MatExpansionPanel,
    MatAccordion,
    MatExpansionPanelHeader,
    MatSlider,
    MatSliderThumb,
    FormsModule
  ],
  templateUrl: './create-mood.component.html',
  styleUrl: './create-mood.component.scss'
})
export class CreateMoodComponent {
  panelOpenState = false;
  today: Date = new Date();
  disabled = false;
  max = 12;
  min = 0;
  showTicks = false;
  step = 0.5;
  thumbLabel = false;
  hours_slept = 0;
  formattedDate: string;

  constructor() {
    // Format the date as "dd.MM.yyyy"
    this.formattedDate = format(this.today, 'dd.MM.yyyy');
  }
}
