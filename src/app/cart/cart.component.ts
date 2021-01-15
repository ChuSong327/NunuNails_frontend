import {
  Component,
  OnInit,
  Input,
  SimpleChanges,
  Output,
  EventEmitter,
 } from '@angular/core';

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
  productId: string;
}

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.sass']
})
export class CartComponent implements OnInit {

  @Input() items;
  @Input() price;
  @Input() value;
  @Output() updateProducts = new EventEmitter<any>();

  currentProducts: Products[] = [];
  totalPrice: number;
  quantity: number;

  constructor() { }

  ngOnInit() {}

  ngOnChanges(changes: SimpleChanges) {
    if(changes.items){
      this.currentProducts = changes.items.currentValue;
    }
    this.totalPrice = changes.price.currentValue;
    this.quantity = changes.value.currentValue;
  }

  handleRemove(product){
    /** Remove the selected item from cart, update the total price of left items, and update the number of quantity */
    /** Pass in selected product directly instead of using event.target */
    let index = this.currentProducts.indexOf(product);
    this.currentProducts.splice(index, 1);
    this.totalPrice = Number(this.totalPrice) - Number(product.product.price) * Number(product.quantity);
    this.quantity = Number(this.quantity) - Number(product.quantity);


    /** Emit the updated products, quantity, and totalPrice to Parent.  */
    this.updateProducts.emit({products: this.currentProducts, quantity: this.quantity, totalPrice: this.totalPrice});
  }
}
