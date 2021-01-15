import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoverNudeComponent } from './cover-nude.component';

describe('CoverNudeComponent', () => {
  let component: CoverNudeComponent;
  let fixture: ComponentFixture<CoverNudeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoverNudeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoverNudeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
