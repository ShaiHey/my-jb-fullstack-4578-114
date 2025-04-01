import { Component, OnInit, signal } from '@angular/core';
import { Furniture } from '../../../models/furnitures/furniture.model';
import { FurnituresService } from '../../../services/furnitures.service';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'app-list',
  imports: [ CardComponent ],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent implements OnInit {
  list = signal<Furniture[]>([])

  constructor(
    public furnitureService: FurnituresService
  ) {}

  async ngOnInit(): Promise<void> {
    try {
      const list = await this.furnitureService.getAll()
      this.list.set(list)
    } catch (error) {
      alert(error)
    }
  }

  addFurniture(furniture: Furniture) {
    this.list.set([furniture, ...this.list()])
  }
}
