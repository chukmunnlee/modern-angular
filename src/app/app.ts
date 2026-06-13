import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { Header } from './ui/header/header';
import {ProductsGrid} from './ui/products/products-grid/products-grid';

const ui = [ Header, ProductsGrid ]

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ...ui ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('modern-angular');
}
