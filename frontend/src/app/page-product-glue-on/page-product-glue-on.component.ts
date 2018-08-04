import { Component, OnInit } from '@angular/core';
import { ApiService } from "../api.service";


@Component({
  selector: 'app-page-product-glue-on',
  templateUrl: './page-product-glue-on.component.html',
  styleUrls: ['./page-product-glue-on.component.sass']
})
export class PageProductGlueOnComponent implements OnInit {

  constructor(private api: ApiService) { }

  products: any;

  ngOnInit() {
    this.api.getGlueOnNails()
      .subscribe(res => {
        this.products = res;
      }, err => {
        console.log(err);
      })
  }
}
