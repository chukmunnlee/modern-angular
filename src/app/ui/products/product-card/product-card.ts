import { Component, input } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {Product} from '../product';
import {CurrencyPipe} from '@angular/common';

@Component({
  selector: 'app-product-card',
  imports: [ MatCardModule, MatButtonModule, CurrencyPipe ],
  templateUrl: './product-card.html',
  styleUrl: './product-card.scss',
})
export class ProductCard {
  // mandatory
  readonly product = input.required<Product>()
  readonly addButtonLabel = input<string>('Add to cart')
}
