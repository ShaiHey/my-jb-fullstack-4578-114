import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../models/products/product.model';
import { environment } from '../../environments/environment';
import { firstValueFrom } from 'rxjs';
import { Draft } from '../models/products/draft.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(
    public httpClient: HttpClient
  ) { }

  async getAll(): Promise<Product[]> {
    const observable = this.httpClient.get<Product[]>(`${environment.restServerUrl}`)
    const products = firstValueFrom(observable)
    return products
  }

  async createProduct(draft: Draft): Promise<Product> {
    const observable = this.httpClient.post<Product>(`${environment.restServerUrl}`, draft)
    const newProduct = firstValueFrom(observable)
    return newProduct
  }

  async deleteProduct(productId: string): Promise<boolean> {
    const observable = this.httpClient.delete<boolean>(`${environment.restServerUrl}/${productId}`)
    const isDeleted = firstValueFrom(observable)
    return isDeleted
  }
}
