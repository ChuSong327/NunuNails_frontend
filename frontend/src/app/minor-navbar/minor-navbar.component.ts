import { Component, OnInit, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-minor-navbar',
  templateUrl: './minor-navbar.component.html',
  styleUrls: ['./minor-navbar.component.sass']
})
export class MinorNavbarComponent implements OnInit {
  items=[
    {
      title: "Press on nails",
      link: "/press-on-nails"
    },
    {
      title: "Glue on nails",
      link: "/glue-on-nails"
    },
    {
      title: "Nude Acrylic French",
      link: "/nude-acrylic-french"
    },
    {
      title: "Size & Styles",
      link: "/size&styles"
    },
    {
      title: "Glue",
      link: "/glue"
    },
    {
      title: "Tools",
      link: "/tools"
    }
  ];

  @Input() value;

  quantity = [];
  product = [];

  constructor() { }

  ngOnInit() {
    // this.product.push(JSON.parse(localStorage.cart));
    // console.log(this.product);
  }

  ngOnChanges(changes: SimpleChanges){
    this.quantity = changes.value.currentValue;
    console.log("this is the quantity: ", this.quantity)
  }

}
