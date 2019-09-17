package com.debanjan.service;

import java.util.ArrayList;
import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.debanjan.dto.EmployeeDTO;
import com.debanjan.entity.Employee;
import com.debanjan.repository.EmployeeRepository;

@Service
public class EmployeeServiceImpl implements EmployeeService {

	@Autowired
	private EmployeeRepository employeeRepo;

	@Override
	@Transactional
	public EmployeeDTO register(EmployeeDTO employee) {
		Employee empEntity = new Employee();
		BeanUtils.copyProperties(employee, empEntity);

		Employee savedEmployee = employeeRepo.save(empEntity);
		EmployeeDTO registeredEmp = new EmployeeDTO();
		BeanUtils.copyProperties(savedEmployee, registeredEmp);
		registeredEmp.setEmployeeId(savedEmployee.getEmployeeId().intValue());

		return registeredEmp;
	}

	@Override
	@Transactional
	public List<EmployeeDTO> getEmployees() {

		List<Employee> employeeList = employeeRepo.findAll();
		List<EmployeeDTO> emplListResponse = new ArrayList<>();
		for (Employee employee : employeeList) {
			EmployeeDTO empDto = new EmployeeDTO();
			BeanUtils.copyProperties(employee, empDto);
			emplListResponse.add(empDto);
		}

		return emplListResponse;
	}

}
