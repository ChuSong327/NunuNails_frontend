import { Component, OnInit } from '@angular/core';
import { ApiService } from "../api.service";

@Component({
  selector: 'app-page-product-nude',
  templateUrl: './page-product-nude.component.html',
  styleUrls: ['./page-product-nude.component.sass']
})
export class PageProductNudeComponent implements OnInit {

  constructor(private api:ApiService) { }

  products: any;

  ngOnInit() {
    this.api.getNudeFrenchNails()
      .subscribe(res => {
        this.products = res;
      }, err => {
        console.log(err);
      })
  }
}
