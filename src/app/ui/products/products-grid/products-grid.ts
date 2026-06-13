import { Component, signal } from '@angular/core';
import {ProductCard} from '../product-card/product-card';
import {Product, SAMPLE_PRODUCTS} from '../product';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-products-grid',
  imports: [ ProductCard, MatIconModule ],
  templateUrl: './products-grid.html',
  styleUrl: './products-grid.scss',
})
export class ProductsGrid {
  protected readonly products = signal<Product[]>([...SAMPLE_PRODUCTS])
}
