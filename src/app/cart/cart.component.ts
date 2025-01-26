import { Component, Inject } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { Projection } from '../models/projection.model';
import { CartService } from '../../Services/cart.service';
import { MatButtonModule } from '@angular/material/button';
import { UserService } from '../../Services/user.service';


@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [
    MatCardModule,
    CommonModule,
    MatButtonModule
  ],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  cart: Projection[] = [];

  constructor(private cartService: CartService, private userService: UserService) {}

  ngOnInit(): void {
    this.cart = this.cartService.getCart();
  }
  emptyCart(): void {
    this.cartService.emptyCart();
    this.cart = this.cartService.getCart();
  }

  addToCart(projection: Projection): void {
    if (this.userService.isLoggedIn()) {
      this.cartService.addToCart(projection);
    } else {
      alert('Morate biti prijavljeni da biste dodali stavke u korpu.');
    }
  }
}
