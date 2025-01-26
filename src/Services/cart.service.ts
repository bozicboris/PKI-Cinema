import { Injectable } from '@angular/core';
import { Projection } from '../app/models/projection.model'; // Adjust the path as necessary

@Injectable({
  providedIn: 'root', // This makes the service available globally
})
export class CartService {
  private cart: Projection[] = [];

  constructor() {}
  addToCart(projection: Projection): void {
    this.cart.push(projection);
    console.log('Cart after adding:', this.cart); // Debugging output
    alert('Item added to cart');
  }
  

  getCart(): Projection[] {
    return this.cart;
  }
emptyCart(): void {
    this.cart = [];
    console.log('Cart has been emptied:', this.cart); // Debugging output
    alert('Cart has been emptied');
}
}


