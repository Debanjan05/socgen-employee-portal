package com.debanjan.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.debanjan.entity.Employee;
import com.debanjan.repository.EmployeeRepository;

@Service
public class EmployeeServiceImpl implements EmployeeService {
	
	@Autowired
	private EmployeeRepository employeeRepo;
	

	@Override
	public Employee register(Employee employee) {
		return employeeRepo.save(employee);
	}

	@Override
	public List<Employee> getEmployees() {
		return employeeRepo.findAll();
	}

}
