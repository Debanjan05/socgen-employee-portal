package com.debanjan.service;

import java.util.List;

import com.debanjan.dto.EmployeeDTO;

public interface EmployeeService {
	
	public EmployeeDTO register(EmployeeDTO employee);
	
	public List<EmployeeDTO> getEmployees();

}
