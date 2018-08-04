import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductPressOnComponent } from './product-press-on.component';

describe('ProductPressOnComponent', () => {
  let component: ProductPressOnComponent;
  let fixture: ComponentFixture<ProductPressOnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductPressOnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductPressOnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
