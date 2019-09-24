import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee.service';
import { EmployeeModel } from 'src/app/models/employee.model';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-view-employee',
  templateUrl: './view-employee.component.html',
  styleUrls: ['./view-employee.component.scss']
})
export class ViewEmployeeComponent implements OnInit {

  employeeList: EmployeeModel[];
  displayedColumns: string[];
  dataSource: MatTableDataSource<EmployeeModel>;

  constructor(private employeeService: EmployeeService) {
    this.displayedColumns = ['name', 'gender', 'dob', 'department'];
  }

  ngOnInit() {
    this.populateEmployees();
  }

  async populateEmployees() {
    try {
      this.employeeList = await this.employeeService.getEmployeeList();
      this.dataSource = new MatTableDataSource<EmployeeModel>(this.employeeList);
    } catch (error) {
      console.log(error);
    }
  }

}
