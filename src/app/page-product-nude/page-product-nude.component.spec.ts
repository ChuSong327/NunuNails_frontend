import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageProductNudeComponent } from './page-product-nude.component';

describe('PageProductNudeComponent', () => {
  let component: PageProductNudeComponent;
  let fixture: ComponentFixture<PageProductNudeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageProductNudeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageProductNudeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
