import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageGlueComponent } from './page-glue.component';

describe('PageGlueComponent', () => {
  let component: PageGlueComponent;
  let fixture: ComponentFixture<PageGlueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageGlueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageGlueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
