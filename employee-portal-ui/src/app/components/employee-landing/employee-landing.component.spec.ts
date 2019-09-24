import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeLandingComponent } from './employee-landing.component';

describe('EmployeeBaseComponent', () => {
  let component: EmployeeLandingComponent;
  let fixture: ComponentFixture<EmployeeLandingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeLandingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
