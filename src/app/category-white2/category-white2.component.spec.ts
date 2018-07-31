import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryWhite2Component } from './category-white2.component';

describe('CategoryWhite2Component', () => {
  let component: CategoryWhite2Component;
  let fixture: ComponentFixture<CategoryWhite2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoryWhite2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryWhite2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
