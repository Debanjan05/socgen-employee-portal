package com.debanjan.api;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.debanjan.dto.EmployeeDTO;
import com.debanjan.entity.Employee;
import com.debanjan.service.EmployeeService;

@CrossOrigin
@RestController
public class EmployeeController {

	@Autowired
	private EmployeeService employeeService;

	@PostMapping(value = "/register")
	public ResponseEntity<EmployeeDTO> registerEmployee(@RequestBody EmployeeDTO employee) {
		return new ResponseEntity<EmployeeDTO>(employeeService.register(employee), HttpStatus.OK);
	}

	@GetMapping(value = "/details")
	public ResponseEntity<List<EmployeeDTO>> getDetails() {
		return new ResponseEntity<List<EmployeeDTO>>(employeeService.getEmployees(), HttpStatus.OK);
	}

}
