import { Component, OnInit, Input, SimpleChanges, OnChanges } from '@angular/core';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.sass']
})
export class ProductDetailComponent implements OnInit {

  @Input() item;

  product = [];

  constructor() { }

  ngOnInit() {}

  ngOnChanges(changes: SimpleChanges){
    this.product = changes.item.currentValue;
  }
}
