import { Component, OnInit, signal } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { Product } from '../../../models/products/product.model';
import { ProductsService } from '../../../services/products.service';

@Component({
  selector: 'app-list',
  imports: [ CardComponent ],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent implements OnInit {
  list = signal<Product[]>([])

  constructor(
    public productsService: ProductsService
  ) {}

  async ngOnInit(): Promise<void> {
    try {
      const list = await this.productsService.getAll()
      this.list.set(list)
    } catch (error) {
      alert(error)
    }
  }

  addProduct(product: Product) {
    this.list.set([product, ...this.list()])
  }

  removeProduct(productId: string) {
    this.list.set(this.list().filter(p => p.id !== productId))
  }
}
