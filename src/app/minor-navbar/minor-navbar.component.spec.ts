import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MinorNavbarComponent } from './minor-navbar.component';

describe('MinorNavbarComponent', () => {
  let component: MinorNavbarComponent;
  let fixture: ComponentFixture<MinorNavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MinorNavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MinorNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
