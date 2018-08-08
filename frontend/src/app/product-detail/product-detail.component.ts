import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  SimpleChanges
} from "@angular/core";

interface Product {
  _id: string;
  name: string;
  category: string;
  description: string;
  price: string;
}

interface Products {
  product: Product;
  productId: string;
  quantity: string;
}

@Component({
  selector: "app-product-detail",
  templateUrl: "./product-detail.component.html",
  styleUrls: ["./product-detail.component.sass"]
})
export class ProductDetailComponent implements OnInit {
  @Input() item;
  @Output() updateQuantity = new EventEmitter<any>();

  /** Define the product in the page. */
  product!: Product;

  /** Contains all the products. */
  productsArray: Products[] = [];

  constructor() {}

  ngOnInit() {}

  ngOnChanges(changes: SimpleChanges) {
    this.product = changes.item.currentValue;
  }

  /** write cart into the localstorage. */
  private addCartToStorage(productsArray){
    localStorage.setItem("cart", JSON.stringify(productsArray));
  }

  /** get cart from localstorage. */
  private get getCartFromStorage():Products[] {
    if(localStorage.length){
      return JSON.parse(localStorage.getItem("cart"));
    }
    return [];
  }

  handleAddClick(quantityValue) {
    let currentProductId = this.product._id;

    /** Emit the quantity value to the paranet. */
    this.updateQuantity.emit(quantityValue);

    /** If localstorage has items. */
    this.productsArray = this.getCartFromStorage;
    let productExistInStorage = false;

    /** If find the product in localstorage, skip the push step. */
    for (const product of this.productsArray) {
      if (product.productId === currentProductId) {
        const {quantity} = product;
        product.quantity = String(Number(quantity) + Number(quantityValue));
        productExistInStorage = true;
      }
    }

    /** If product not in the cart, add to the cart array. */
    if (!productExistInStorage) {
      this.productsArray.push({
        productId: currentProductId,
        product: this.product,
        quantity: quantityValue
      });
    }
    this.addCartToStorage(this.productsArray);
  }
}
