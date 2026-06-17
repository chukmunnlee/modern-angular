import { Component, computed, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms'
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {ProductCard} from '../product-card/product-card';
import {Product, SAMPLE_PRODUCTS} from '../product';
import {CartService} from '../../../cart/cart-service';

@Component({
  selector: 'app-products-grid',
  imports: [ ProductCard, MatIconModule, MatInputModule, MatFormFieldModule, FormsModule ],
  templateUrl: './products-grid.html',
  styleUrl: './products-grid.scss',
})
export class ProductsGrid {
  protected readonly cartSvc: CartService = inject(CartService)
  protected readonly products = signal<Product[]>([...SAMPLE_PRODUCTS])
  protected readonly searchTerm = signal<string>('');
  protected readonly filteredProducts = computed(() => {
    const term = this.searchTerm().toLowerCase()
    if (!term)
      return this.products()
    return this.products().filter(prod => prod.name.toLowerCase().includes(term)
        || prod.description.toLowerCase().includes(term))
  })

  protected onAddToCart(product: Product): void {
    this.cartSvc.addToCart(product)
  }

  protected clearSearch(): void {
    this.searchTerm.set('')
  }

  protected trimSearch(): void {
    this.searchTerm.update((val: string) => val.trim())
  }
}
