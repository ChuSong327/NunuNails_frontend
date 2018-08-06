import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '../../../node_modules/@angular/router';
import { ApiService } from "../api.service";


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

  ngOnInit() {

    const productUrl = `http://localhost:3000/api/products/${this.route.snapshot.params.product_id}`;

    this.api.getProductDetail(productUrl)
      .subscribe(res => {
        this.product = res;
      }, err => {
        console.log(err);
      })
  }
}
