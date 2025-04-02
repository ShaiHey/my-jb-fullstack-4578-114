import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductsService } from '../../../services/products.service';
import { Draft } from '../../../models/products/draft.model';

@Component({
  selector: 'app-new',
  imports: [ ReactiveFormsModule ],
  templateUrl: './new.component.html',
  styleUrl: './new.component.css'
})
export class NewComponent {

  constructor(
    public productsService: ProductsService,
    public router: Router
  ) {}

  newForm = new FormGroup({
    name: new FormControl('', [
      Validators.required,
      Validators.minLength(3)
    ]),
    prodDate: new FormControl(new Date, [
      Validators.required
    ]),
    expireDate: new FormControl(new Date, [
      Validators.required
    ]),
    category: new FormControl('', [
      Validators.required,
      Validators.minLength(3)
    ]),
    price: new FormControl(0, [
      Validators.required,
      Validators.min(0)
    ]),
  })

  async addProduct() {
    if(this.newForm.invalid) return;

    try {
      await this.productsService.createProduct(this.newForm.value as Draft)
      this.router.navigate(['/'])
    } catch (error) {
      
    }
  }

}
