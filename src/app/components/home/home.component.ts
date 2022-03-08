import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  homeTitle = 'taco';
  homeSubtitle = 'Select a tile below to begin your journey';
}
