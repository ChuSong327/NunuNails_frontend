import { Component, OnInit, Input, SimpleChanges, OnChanges } from '@angular/core';


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

  onClick(event) {
    console.log(event.target)
  }
};
