package edu.yavirac.distributivobackend.util;

import org.apache.poi.ss.usermodel.CellType;
import org.apache.poi.xssf.usermodel.XSSFCell;

public class ExcelRowUtils {
 

    public static String getNullError(XSSFCell cell){
       
        return String
                  .format("la celda %s no debe ser nula",cell.getAddress().formatAsString());
    }


    public static boolean isNull(XSSFCell cell){


        return cell.getRawValue() == null;
    }

    public static boolean isString(XSSFCell cell){
        return cell.getCellType() == CellType.STRING;

    }

    public static String getNoStringError(XSSFCell cell){
        return String
        .format("la celda %s debe ser una palabra",cell.getAddress().formatAsString());
    }

    public static boolean isNumeric(XSSFCell cell){
        return cell.getCellType() == CellType.NUMERIC;

    }

    public static String getNoNumericError(XSSFCell cell){
        return String
        .format("la celda %s debe ser un numero",cell.getAddress().formatAsString());
    }

    public static boolean isZero(XSSFCell cell){

        if(cell.getRawValue() == null) return true;

        return cell.getNumericCellValue() == 0;

    }

    public static String getZeroError(XSSFCell cell){

        return String
        .format("la celda %s no debe ser cero",cell.getAddress().formatAsString());

    }
}
