import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-landing',
  templateUrl: './employee-landing.component.html',
  styleUrls: ['./employee-landing.component.scss']
})
export class EmployeeLandingComponent implements OnInit {

  title = 'Employee Portal';
  sideNavTitle = 'Employee';
  constructor() { }

  ngOnInit() {
  }

}
