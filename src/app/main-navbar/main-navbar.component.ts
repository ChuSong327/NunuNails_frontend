import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-navbar',
  templateUrl: './main-navbar.component.html',
  styleUrls: ['./main-navbar.component.scss']
})
export class MainNavbarComponent implements OnInit {

  items=[
    {
      title: "shop",
      link: "/press-on-nails"
    },
    {
      title: "size&styles",
      link: "/size-styles"
    },
    {
      title: "glue",
      link: "/glue"
    },
    {
      title: "tools",
      link: "/tools"
    }
  ];

  constructor() { }

  ngOnInit() {

  }

}
