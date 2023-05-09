package edu.yavirac.distributivobackend.util;

import java.time.LocalDate;


public class DateUtils {

   

    public static LocalDate localDateFtomString(String date){
        String[] dateArray = date.split("-");


        return LocalDate
        .of(Integer.valueOf(dateArray[0]), Integer.valueOf(dateArray[1]), Integer.valueOf(dateArray[2]));
    }



}
