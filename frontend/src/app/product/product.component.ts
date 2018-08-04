import { Component, OnInit, Input, SimpleChanges, OnChanges } from '@angular/core';
import { NgOnChangesFeature } from '../../../node_modules/@angular/core/src/render3';
// import { ApiService } from "../api.service";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit, OnChanges {

  @Input() items;

  products = [];

  constructor() { }

  ngOnInit() {}

  ngOnChanges(changes: SimpleChanges){
    this.products = changes.items.currentValue;
  }
};
