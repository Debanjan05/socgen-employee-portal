import { Injectable } from '@angular/core';
import { EmployeeModel } from '../models/employee.model';
import { DataService } from './data.service';

const SERVER_API_URL = 'http://localhost:8080/';
@Injectable()
export class EmployeeService {

  private dataStore: { employees: EmployeeModel[]; };

  constructor(private backendService: DataService) {
    this.dataStore = { employees: [] };
  }

  private async getFromDataStore(): Promise<EmployeeModel[]> {
    const url = SERVER_API_URL + 'details';
    if (!this.dataStore.employees.length) {
      try {
        this.dataStore.employees = await this.backendService.getMethod(url).toPromise();
        return this.dataStore.employees;
      } catch (error) {
        console.log(error);
      }
    }
    return this.dataStore.employees;
  }

  async getEmployeeList(): Promise<EmployeeModel[]> {
    return await this.getFromDataStore();
  }

  getEmployee(employeeId: number): EmployeeModel {
    if (this.dataStore.employees) {
      return this.dataStore.employees.find(emp => emp.employeeId === employeeId);
    }
    return null;
  }

  async registerEmployee(employee: EmployeeModel) {
    const url = SERVER_API_URL + 'register';
    this.backendService.postMethod(url, employee).subscribe(
      response => {
        if (!this.dataStore.employees.find(emp => emp.employeeId === response.employeeId)) {
          this.dataStore.employees.push(response);
        } else {
          throw new Error('Employee Id already present!');
        }
      },
      error => {
        console.log(error);
      }
    );
  }
}
