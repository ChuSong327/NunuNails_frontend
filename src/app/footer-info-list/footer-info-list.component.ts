import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer-info-list',
  templateUrl: './footer-info-list.component.html',
  styleUrls: ['./footer-info-list.component.scss']
})
export class FooterInfoListComponent implements OnInit {

  items=["faq", "shipping time", "contact"];

  constructor() { }

  ngOnInit() {
  }

}
