import { computed, Injectable, signal } from '@angular/core';
import {Product} from '../ui/products/product';
import {CartItem} from './cart-item';

@Injectable({ providedIn: 'root' })
export class CartService {

  private readonly contents = signal<CartItem[]>([])
  readonly totalItems = computed(() => this.contents().reduce((acc, curr) => acc + curr.quantity, 0))

  addToCart(product: Product) {
    // Need to create a new contents, do not mutate existing object
    console.info(`Add product ${product.name} to cart`)
    this.contents.update(items => {
      const idx = items.findIndex(cartItem => cartItem.product.id == product.id)
      if (idx < 0)
        return [ ...items, { product, quantity: 1 } ]

      items[idx] = { ...items[idx], quantity: items[idx].quantity + 1 }
      return [ ...items ]

    })
    //this.contents.update(contents => [ ...contents, prod ])
  }
}
