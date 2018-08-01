import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterInfoListComponent } from './footer-info-list.component';

describe('FooterInfoListComponent', () => {
  let component: FooterInfoListComponent;
  let fixture: ComponentFixture<FooterInfoListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooterInfoListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterInfoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
