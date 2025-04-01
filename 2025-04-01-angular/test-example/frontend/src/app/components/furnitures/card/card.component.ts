import { Component, input } from '@angular/core';
import { Furniture } from '../../../models/furnitures/furniture.model';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  furniture = input<Furniture>()
}
