package edu.yavirac.distributivobackend.util;

import java.util.HashMap;
import java.util.Map;

import org.apache.poi.xssf.usermodel.XSSFCell;
import java.util.function.Function;

public class ValidatorExcelCell {
    
    private Map<String,Function<XSSFCell, String>> functions;
    private StringBuilder errors = new StringBuilder();


    public ValidatorExcelCell(){
        functions = getValidators();
    } 

    public String getErrors(){

        return this.errors.toString();

    }

    public boolean validate(String type, XSSFCell cell){

        String response = functions.get(type).apply(cell);

        if(StringUtils.isNullOrEmpty(response)) return true;
    
        errors.append("<br>").append(response);

        return false;
    }

    public void vacieErrors(){
        this.errors.setLength(0);
    }


    public boolean hasErrors(){

        return errors.length() > 0;

    }

    public void executeIfNotErrors(Function<String,?> callback){
        if(!hasErrors()) callback.apply(null);

    }


    private Map<String, Function<XSSFCell,String>> getValidators(){

        Map<String, Function<XSSFCell, String>> functions = new HashMap<>();

        functions.put("string", (XSSFCell cell)->{
            if(ExcelRowUtils.isNull(cell)) return ExcelRowUtils.getNullError(cell); 
            else if(!ExcelRowUtils.isString(cell)) return ExcelRowUtils.getNoStringError(cell);
            else return "";
        });

        functions.put("number", (XSSFCell cell)->{
            if(ExcelRowUtils.isNull(cell)) return ExcelRowUtils.getNullError(cell); 
            else if(!ExcelRowUtils.isNumeric(cell)) return ExcelRowUtils.getNoNumericError(cell);               
            else return "";
        });

        functions.put("id",(XSSFCell cell)->{
            if(ExcelRowUtils.isNull(cell)) return ExcelRowUtils.getNullError(cell); 
            else if(!ExcelRowUtils.isNumeric(cell)) return ExcelRowUtils.getNoNumericError(cell);            
            else if(ExcelRowUtils.isZero(cell)) return ExcelRowUtils.getZeroError(cell);
            else return "";
        });

        return functions;
    }
}
