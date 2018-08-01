import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoverPressOnComponent } from './cover-press-on.component';

describe('CoverPressOnComponent', () => {
  let component: CoverPressOnComponent;
  let fixture: ComponentFixture<CoverPressOnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoverPressOnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoverPressOnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
