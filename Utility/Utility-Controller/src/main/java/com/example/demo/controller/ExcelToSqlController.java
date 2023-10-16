package com.example.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.sample.dto.Response;
import com.sample.util.ExcelParse;

@RestController
public class ExcelToSqlController {
	
	
	@Autowired
	ExcelParse excelParse;
	
	
	@PostMapping(value="/upload")
	public Response parseExcel(@RequestParam("file") MultipartFile file) {
		
		return excelParse.praseExcelToSQL(file);
	}

}
