package com.sample.util;

import java.io.IOException;
import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;

import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.xssf.usermodel.XSSFSheet;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.sample.dto.Message;
import com.sample.dto.Response;

@Service
public class ExcelParse {

	public Response praseExcelToSQL(MultipartFile file) {
		
		String finalString = "";
		String query = "";
		List<String> keywordList = new ArrayList<String>();
		keywordList.add("NEXTVAL");
		keywordList.add("to_timestamp");
		
		Response response = new Response();
		Message message = new Message();
		message.setStatusCode(1);
		message.setStatus("Success");
		
		try {

			XSSFWorkbook workbook = new XSSFWorkbook(file.getInputStream());
			
			for (int i = 0; i < workbook.getNumberOfSheets(); i++) {
				XSSFSheet sheet = workbook.getSheetAt(i);
				System.out.println(sheet.getSheetName());

				Boolean isHeading = true;
				String columns = "";
				String valueInString = "";
				
				for (Row row : sheet) {

					String values = "";
					query = "insert into " + sheet.getSheetName() + " ( ";

					for (Cell cell : row) {

						if (isHeading) {
							switch (cell.getCellType()) {

							case STRING:
								System.out.println("heading String : " + cell.getStringCellValue());
								columns += cell.getStringCellValue() + ",";
								break;
							default:
								break;
							}

						} else {
							switch (cell.getCellType()) {
							case STRING:
								System.out.println("String : " + cell.getStringCellValue());
								valueInString = cell.getStringCellValue();
								if(valueInString != null && ( valueInString.equalsIgnoreCase("null") || checkIfKeyworkExists(keywordList,valueInString))) {
									values +=  valueInString + ",";
								} else {
									values += "'" + valueInString + "',";
								}		
								break;
							case NUMERIC:
								System.out.println("Number : " + cell.getNumericCellValue());
//								values += cell.getNumericCellValue() + ",";
								
								values += new BigDecimal(cell.getNumericCellValue()).toPlainString() + ",";
								break;
							case BOOLEAN:
								System.out.println("Bool : " + cell.getBooleanCellValue());
								values += cell.getBooleanCellValue() + ",";
								break;
							case FORMULA:
								System.out.println("Formula : " + cell.getCellFormula());
								values += cell.getCellFormula() + ",";
								break;
							default:
								System.out.println("default : " + cell.getStringCellValue());
								values += "null,";
								break;
							}
						}

					}
					if (isHeading) {
						isHeading = false;
					} else {

						query += columns.substring(0, columns.length() - 1) + " ) values ( "
								+ values.substring(0, values.length() - 1) + ");";
					}

					System.err.println(query);
					finalString += query;

				}			

			}
			
			System.out.println(finalString);
		} catch (

		IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			message.setStatusCode(1);
			message.setStatus("Failure");
		}

		response.setData(finalString);
		response.setMessage(message);
		return response;
	}
	
	public Boolean checkIfKeyworkExists(List<String> keywordList , String value) {
		
		for(String keyword : keywordList) {
			if(value.contains(keyword))
				return true;
		}
		return false;
	}

}
