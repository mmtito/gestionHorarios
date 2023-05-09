package edu.yavirac.distributivobackend.util;


import java.util.Map;
import java.util.function.Function;

import com.itextpdf.text.BaseColor;

import java.util.HashMap;

public class ColorUtils {
    
    public static Map<String, Function<String, BaseColor>> getBaseColorFunctions;

    public static Map<String, String> colors_regex;
    static{
        colors_regex = new HashMap<>();
        colors_regex.put("rgb","^rgb\\(\\s*(0|[1-9]\\d?|1\\d\\d?|2[0-4]\\d|25[0-5])%?\\s*,\\s*(0|[1-9]\\d?|1\\d\\d?|2[0-4]\\d|25[0-5])%?\\s*,\\s*(0|[1-9]\\d?|1\\d\\d?|2[0-4]\\d|25[0-5])%?\\s*\\)$");
        colors_regex.put("word","^[a-z]*$" );
        colors_regex.put("hexa", "^#[0-9a-f]{3}([0-9a-f]{3})?$");
        colors_regex.put("rgba", "^rgba\\(\\s*(0|[1-9]\\d?|1\\d\\d?|2[0-4]\\d|25[0-5])%?\\s*,\\s*(0|[1-9]\\d?|1\\d\\d?|2[0-4]\\d|25[0-5])%?\\s*,\\s*(0|[1-9]\\d?|1\\d\\d?|2[0-4]\\d|25[0-5])%?\\s*,\\s*((0.[1-9])|[01])\\s*\\)$");
        colors_regex.put("hsl","^hsl\\(\\s*(0|[1-9]\\d?|[12]\\d\\d|3[0-5]\\d)\\s*,\\s*((0|[1-9]\\d?|100)%)\\s*,\\s*((0|[1-9]\\d?|100)%)\\s*\\)$");
    

        getBaseColorFunctions = new HashMap<>();

        getBaseColorFunctions.put("none", (String color)->BaseColor.CYAN);
        getBaseColorFunctions.put("rgb",(String value)->{

            value = value.substring(4);
            value = value.replace(")", "");

            System.out.println(value);
            
            String[] valueStr = value.split(",");
  
            BaseColor color = new BaseColor(Integer.valueOf(valueStr[0]),Integer.valueOf(valueStr[1]),Integer.valueOf(valueStr[2]));

            return color;

        });

        getBaseColorFunctions.put("hexa",(String value)->{


      

            return new BaseColor(
                Integer.valueOf( value.substring( 1, 3 ), 16 ),
                Integer.valueOf( value.substring( 3, 5 ), 16 ),
                Integer.valueOf( value.substring( 5, 7 ), 16 ) );
        });
    } 


    
    


    public static String verifyFormatColor(String color){

        String type = "none";

        for(Map.Entry<String, String> entry : colors_regex.entrySet()){

            if(color.matches(entry.getValue())) {
                type = entry.getKey();
                break;
            } 
        }

        return type;

    }

    public static BaseColor getBaseColor(String color){

        String key = verifyFormatColor(color);
        return getBaseColorFunctions.get(key).apply(color);

    }
}