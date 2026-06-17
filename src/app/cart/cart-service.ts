import { Injectable, signal } from '@angular/core';
import {Product} from '../ui/products/product';

@Injectable({ providedIn: 'root' })
export class CartService {

  private readonly contents = signal<Product[]>([])

  addToCart(prod: Product) {
    // Need to create a new contents, do not mutate existing object
    console.info(`Add product ${prod.name} to cart`)
    this.contents.update(contents => [ ...contents, prod ])
  }
}
