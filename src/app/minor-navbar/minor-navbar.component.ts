import { Component, OnInit } from '@angular/core';

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
  constructor() { }

  ngOnInit() {
  }

}
