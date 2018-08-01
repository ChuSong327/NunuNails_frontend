import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageProductPressOnComponent } from './page-product-press-on.component';

describe('PageProductPressOnComponent', () => {
  let component: PageProductPressOnComponent;
  let fixture: ComponentFixture<PageProductPressOnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageProductPressOnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageProductPressOnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
