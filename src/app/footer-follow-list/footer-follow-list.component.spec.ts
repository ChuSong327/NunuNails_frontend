import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterFollowListComponent } from './footer-follow-list.component';

describe('FooterFollowListComponent', () => {
  let component: FooterFollowListComponent;
  let fixture: ComponentFixture<FooterFollowListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooterFollowListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterFollowListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
