import { Component, OnInit, } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from "../api.service";
import {BASE} from '../url';

@Component({
  selector: 'app-page-product-detail',
  templateUrl: './page-product-detail.component.html',
  styleUrls: ['./page-product-detail.component.sass']
})
export class PageProductDetailComponent implements OnInit {

  constructor(
      private api: ApiService,
      private route:ActivatedRoute
    ) { }

  product: any;
  quantity: any;

  ngOnInit() {
    const productUrl = `${BASE}/api/products/${this.route.snapshot.params.product_id}`;
    this.api.getProductDetail(productUrl)
      .subscribe(res => {
        this.product = res;
      }, err => {
        console.log(err);
      })
  }

  getQuantity(value) {
    this.quantity = value;
  }
}
