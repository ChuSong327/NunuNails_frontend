import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageProductGlueOnComponent } from './page-product-glue-on.component';

describe('PageProductGlueOnComponent', () => {
  let component: PageProductGlueOnComponent;
  let fixture: ComponentFixture<PageProductGlueOnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageProductGlueOnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageProductGlueOnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
