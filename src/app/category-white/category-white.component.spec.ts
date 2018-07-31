import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryWhiteComponent } from './category-white.component';

describe('CategoryWhiteComponent', () => {
  let component: CategoryWhiteComponent;
  let fixture: ComponentFixture<CategoryWhiteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoryWhiteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryWhiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
