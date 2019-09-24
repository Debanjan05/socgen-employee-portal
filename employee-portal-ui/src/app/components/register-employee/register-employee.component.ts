import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EmployeeModel } from 'src/app/models/employee.model';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-register-employee',
  templateUrl: './register-employee.component.html',
  styleUrls: ['./register-employee.component.scss']
})
export class RegisterEmployeeComponent implements OnInit {

  newEmployeeForm: FormGroup;
  firstName: FormControl;
  lastName: FormControl;
  gender: FormControl;
  dateOfBirth: FormControl;
  department: FormControl;
  newEmployee: EmployeeModel;
  genderList: string[];

  constructor(private employeeService: EmployeeService) {
    this.newEmployee = {} as EmployeeModel;
    this.genderList = ['Male', 'Female'];
  }

  ngOnInit() {
    this.initializeFormFields();
  }

  initializeFormFields() {
    this.firstName = new FormControl('', [Validators.required]);
    this.lastName = new FormControl('', [Validators.required]);
    this.gender = new FormControl('', [Validators.required]);
    this.dateOfBirth = new FormControl('', [Validators.required]);
    this.department = new FormControl('', [Validators.required]);
    this.newEmployeeForm = new FormGroup({
      firstName: this.firstName,
      lastName: this.lastName,
      gender: this.gender,
      dateOfBirth: this.dateOfBirth,
      department: this.department
    });
  }

  registerEmployee(employee: EmployeeModel) {
    this.newEmployee.firstName = employee.firstName;
    this.newEmployee.lastName = employee.lastName;
    this.newEmployee.gender = employee.gender;
    this.newEmployee.dateOfBirth = employee.dateOfBirth;
    this.newEmployee.department = employee.department;
    this.employeeService.registerEmployee(this.newEmployee);
  }

}
