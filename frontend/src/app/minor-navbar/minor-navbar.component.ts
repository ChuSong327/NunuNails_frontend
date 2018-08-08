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

  quantity: number;
  products = [];

  constructor() { }

  ngOnInit() {
    if(localStorage.length){
      this.products = JSON.parse(localStorage.getItem("cart"));
    };

    this.quantity = 0;
    for(const product of this.products) {
        const { quantity } = product;
        this.quantity += Number(quantity);
    }
  }

  ngOnChanges(changes: SimpleChanges){
    this.quantity = changes.value.currentValue;
  }
}
