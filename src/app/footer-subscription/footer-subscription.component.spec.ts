import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterSubscriptionComponent } from './footer-subscription.component';

describe('FooterSubscriptionComponent', () => {
  let component: FooterSubscriptionComponent;
  let fixture: ComponentFixture<FooterSubscriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooterSubscriptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterSubscriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
