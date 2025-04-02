import { Component, input, output } from '@angular/core';
import { Product } from '../../../models/products/product.model';
import { ProductsService } from '../../../services/products.service';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {

  constructor(
    public productService: ProductsService
  ) {}

  product = input<Product>()
  productDeleted = output<string>()


  async deleteMe() {
    try {
      await this.productService.deleteProduct(this.product()!.id)
      this.productDeleted.emit(this.product()!.id)
    } catch (error) {
      alert(error)
    }
  }
}
