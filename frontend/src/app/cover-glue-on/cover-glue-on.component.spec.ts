import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoverGlueOnComponent } from './cover-glue-on.component';

describe('CoverGlueOnComponent', () => {
  let component: CoverGlueOnComponent;
  let fixture: ComponentFixture<CoverGlueOnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoverGlueOnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoverGlueOnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
