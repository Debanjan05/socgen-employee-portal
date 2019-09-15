package com.debanjan.service;

import java.util.List;

import com.debanjan.entity.Employee;

public interface EmployeeService {
	
	public Employee register(Employee employee);
	
	public List<Employee> getEmployees();

}
