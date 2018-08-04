import { Component, OnInit } from '@angular/core';
import { ApiService } from "../api.service";

@Component({
  selector: 'app-page-product-press-on',
  templateUrl: './page-product-press-on.component.html',
  styleUrls: ['./page-product-press-on.component.sass']
})
export class PageProductPressOnComponent implements OnInit {

  constructor(private api: ApiService) { }

  products: any;

  ngOnInit() {
    this.api.getPressOnNails()
      .subscribe(res => {
        // console.log(res);
        this.products = res;
      }, err => {
        console.log(err);
      })
  }
}
