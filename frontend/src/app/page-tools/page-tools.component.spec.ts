import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageToolsComponent } from './page-tools.component';

describe('ToolsComponent', () => {
  let component: PageToolsComponent;
  let fixture: ComponentFixture<PageToolsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageToolsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageToolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
