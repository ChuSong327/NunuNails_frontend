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
  selector: 'app-page-checkout',
  templateUrl: './page-checkout.component.html',
  styleUrls: ['./page-checkout.component.sass']
})
export class PageCheckoutComponent implements OnInit {
  constructor() { }

  quantity: number;

  submitted = false;

  model = {
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    cardName: "",
    cardNumber: "",
    exp: "",
    cvv: "",
  }

  /** Define products stored in localStorage */
  products: Products[] = [];

  totalPrice: number;

  private get getCartFromStorage(): Products[] {
    if(localStorage.length) {
      return JSON.parse(localStorage.getItem("cart"));
    }
  }

  private getTotalPrice(products)  {
    let total = 0;
    for(const product of products) {
      total = Number(total) + Number(product.product.price) * Number(product.quantity);
    }
    return total;
  }

  ngOnInit() {
    this.products = this.getCartFromStorage;
    this.totalPrice = this.getTotalPrice(this.products);
  }

  updateQuantity(value) {
    this.quantity = value;
  }

  updateSubmit(value) {
    this.submitted = value;
  }

  updateModel(value) {
    this.model = value;
  }
}
