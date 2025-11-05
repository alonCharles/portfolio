import { Component, signal } from '@angular/core';
import { ProductList } from './product-list/product-list';
import { ShoppingCart } from './shopping-cart/shopping-cart';


@Component({
  selector: 'app-root',
  imports: [ProductList, ShoppingCart ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('shopping-cart');
}
