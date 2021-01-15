import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageSizeStylesComponent } from './page-size-styles.component';

describe('PageSizeStylesComponent', () => {
  let component: PageSizeStylesComponent;
  let fixture: ComponentFixture<PageSizeStylesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageSizeStylesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageSizeStylesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
