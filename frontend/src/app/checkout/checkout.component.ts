import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.sass']
})
export class CheckoutComponent implements OnInit {

  @Input() submit;
  @Input() initModel;
  @Output() updateCartQuantity = new EventEmitter<any>();
  @Output() updateSubmitStatus = new EventEmitter<any>();
  @Output() updateCurrentModel = new EventEmitter<any>();

  submitted: Boolean;

  model: any;

  constructor() { }

  ngOnInit( ) {
    this.submitted = this.submit;
    this.model = this.initModel;
  }

  /** Fill the checkout form with below information */
  handleClick(){
    this.model.firstName = "Anna",
    this.model.lastName = "Song",
    this.model.email ="anna.song@gmail.com",
    this.model.address = "3170 Rubino Dr.",
    this.model.city = "San Jose",
    this.model.state = "CA",
    this.model.zip = "95051",
    this.model.cardName = "Anna Song"
    this.model.cardNumber = "4444 4444 4444 4444",
    this.model.exp = "03/20",
    this.model.cvv = "230"
  }

  /** display confirmation component and pass form data to parent component when click submit button */
  onSubmit() {
    this.submitted = true;
    this.updateCartQuantity.emit(0);
    this.updateSubmitStatus.emit(true);
    this.updateCurrentModel.emit(this.model);
    localStorage.clear();
    window.location.href="/NunuNails-Frontend/#/confirmation";
  }
}
