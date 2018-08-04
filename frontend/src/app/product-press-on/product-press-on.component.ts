import { Component, OnInit } from '@angular/core';
import { ApiService } from "../api.service";

@Component({
  selector: 'app-product-press-on',
  templateUrl: './product-press-on.component.html',
  styleUrls: ['./product-press-on.component.scss']
})
export class ProductPressOnComponent implements OnInit {

  products: any;

  constructor(private api: ApiService) { }

  ngOnInit() {
    this.api.getPressOnNails()
      .subscribe(res => {
        console.log(res);
        this.products = res;
      }, err => {
        console.log(err);
      })
  }



};
