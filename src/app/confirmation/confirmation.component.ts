import { Component, OnInit, Input, SimpleChanges } from '@angular/core';

// interface Product {
//   _id: string;
//   name: string;
//   category: string;
//   description: string;
//   price: string;
// }

// interface Products {
//   product: Product;
//   quantity: string;
//   productId: string;
// }

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.sass']
})
export class ConfirmationComponent implements OnInit {
  constructor() { }

  // @Input() submit;
  // @Input() purchesedProducts;
  // @Input() purchaseTotal;
  // @Input() finalModel;

  // submitted: Boolean;
  // products: Product[] =[];
  // price: number;
  // model: any;

  ngOnInit() {
    setTimeout(() => {window.location.href = "/";}, 2000)
    // this.submitted = this.submit;
    // this.products = this.purchesedProducts;
    // this.price = this.purchaseTotal;
  }

  // ngOnChanges (changes: SimpleChanges) {
  //   this.submitted = changes.submit.currentValue;
  // }
}
