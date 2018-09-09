import { Component, OnInit, } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
  quantity: any;

  ngOnInit() {
    this.route.paramMap
      .subscribe(params => {
        let id = params.get("product_id");
        const productUrl = `https://nununailsbackend.herokuapp.com/api/products/${id}`;
        this.api.getProductDetail(productUrl)
          .subscribe(
            res => {
              this.product = res;
          },
            err => {
              console.log(err);
          })
      })
    // const productUrl = `http://nununails-backend-dev.us-west-1.elasticbeanstalk.com/api/products/${this.route.snapshot.params.product_id}`;
    // this.api.getProductDetail(productUrl)
      // .subscribe(res => {
      //   this.product = res;
      // }, err => {
      //   console.log(err);
      // })
  }

  getQuantity(value) {
    this.quantity = value;
  }
}
