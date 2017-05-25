import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SvgCurvesComponent } from './svg-curves.component';

describe('SvgCurvesComponent', () => {
  let component: SvgCurvesComponent;
  let fixture: ComponentFixture<SvgCurvesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SvgCurvesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SvgCurvesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
