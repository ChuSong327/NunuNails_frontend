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
  selector: 'app-page-cart',
  templateUrl: './page-cart.component.html',
  styleUrls: ['./page-cart.component.sass']
})
export class PageCartComponent implements OnInit {

  constructor() { }

  /** Define products stored in localStorage */
  products: Products[] = [];

  totalPrice: number;

  quantity: number;

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
      total = Number(total) + Number(product.product.price) * Number(product.quantity);
    }
    return total;
  }

  /** Get total quantity of items in shopping cart */
  private getTotalQuantity(products) {
    let total = 0;
    for(const product of products) {
      total = total + Number(product.quantity);
    }
    return total;
  }

  ngOnInit() {
    this.products = this.getCartFromStorage;
    this.totalPrice = this.getTotalPrice(this.products);
    this.quantity = this.getTotalQuantity(this.products);
  }

  /** Update products in cart when remove items in cart */
  updateCartProducts(obj){
    this.products = obj.products;
    this.quantity = obj.quantity;
    this.totalPrice = obj.totalPrice;
    localStorage.setItem("cart", JSON.stringify(this.products));
  }
}
