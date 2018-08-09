import { Component, OnInit } from '@angular/core';

interface Product {
  _id: string;
  name: string;
  category: string;
  description: string;
  price: string;
}

interface Products {
  product: Product;
  quantity: string;
}

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.sass']
})
export class CartComponent implements OnInit {

  constructor() { }

  /** Define products stored in localStorage */
  products: Products[] = [];

  totalPrice: number;

  /** Get products in the shopping cart */
  private get getCartFromStorage(): Products[] {
    if(localStorage.length) {
      return JSON.parse(localStorage.getItem("cart"));
    }
  }

  /** Get the total price of all products in the shopping cart */
  private getTotalPrice(products)  {
    let total = 0;
    for(const product of products) {
      total = Number(total) + Number(product.product.price * product.quantity);
    }
    return total;
  }

  ngOnInit() {
   this.products = this.getCartFromStorage;
   this.totalPrice = this.getTotalPrice(this.products);
  }

}
