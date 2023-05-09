package edu.yavirac.distributivobackend.util;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Date;

public class StringUtils {

    public static boolean isNullOrEmpty(String str) {
        if (str == null) return true;
        if (str.isEmpty()) return true;
     
        return false;
    }
 
    public static String generateUniqueString() {
        DateFormat dateFormat = new SimpleDateFormat("yyyyMMdd_HHmmss");

        Date date = new Date();
        return dateFormat.format(date);

    }

}
