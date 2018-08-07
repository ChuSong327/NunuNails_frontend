import { Component, OnInit, Input, Output, EventEmitter, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.sass']
})
export class ProductDetailComponent implements OnInit {

  @Input() item;
  @Output() updateQuantity = new EventEmitter<any>();

  product = [];

  constructor() { }

  ngOnInit() {}

  ngOnChanges(changes: SimpleChanges){
    this.product = changes.item.currentValue;
  }

  handleAddClick(value){
    this.updateQuantity.emit(value);
  }
}
