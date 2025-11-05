import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CartItemDetailed } from '../cart/cart.model';
import * as CartSelectors from '../cart/cart.selectors';
import * as CartActions from '../cart/cart.actions'

@Component({
  selector: 'app-shopping-cart',
  imports: [CommonModule],
  templateUrl: './shopping-cart.html',
  styleUrl: './shopping-cart.css'
})
export class ShoppingCart {
private store = inject(Store)

cartItems$: Observable<CartItemDetailed[]>
totalPrice$: Observable<number>

constructor(){
  this.cartItems$ = this.store.select(CartSelectors.selectCartItemsWithDetails);
  this.totalPrice$ = this.store.select(CartSelectors.selectCartTotalPrice)
}

increase(productId:string){
  this.store.dispatch(CartActions.increaseQuantity({productId}))
}

decrease(productId:string) {
  this.store.dispatch(CartActions.decreaseQuantity({productId}))
}

clear(){
  this.store.dispatch(CartActions.clearCart())
}

remove(productId: string) {
  this.store.dispatch(CartActions.removeItem({productId}))
}

}
