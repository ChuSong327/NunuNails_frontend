import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryColoredComponent } from './category-colored.component';

describe('CategoryColoredComponent', () => {
  let component: CategoryColoredComponent;
  let fixture: ComponentFixture<CategoryColoredComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoryColoredComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryColoredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
