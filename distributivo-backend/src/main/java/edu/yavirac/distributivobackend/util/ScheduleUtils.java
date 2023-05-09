package edu.yavirac.distributivobackend.util;

import java.time.LocalDate;
import java.util.Map;
import java.util.function.Function;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

public class ScheduleUtils {

    private List<String[]> daysWeekStartToEnd = new ArrayList<>();

    public void generateStartToEnd(String start, String end) {

        LocalDate startLocalDate = DateUtils.localDateFtomString(start);
        LocalDate endLocalDate = DateUtils.localDateFtomString(end);

        while (!endLocalDate.getDayOfWeek().toString().equalsIgnoreCase("SUNDAY"))
            endLocalDate = endLocalDate.plusDays(1);
        
        
        LocalDate currentEndDateWeek;


        while (!startLocalDate.isEqual(endLocalDate)) {

            startLocalDate = getMonDay.get(startLocalDate.getDayOfWeek().toString()).apply(startLocalDate);
            currentEndDateWeek = startLocalDate.plusDays(7);

            daysWeekStartToEnd.add(new String[] { startLocalDate.toString(), currentEndDateWeek.toString() });

            startLocalDate = startLocalDate.plusDays(6);

        };
        
    }
    
    public static Map<String, String> getToFrom(String date) {
    Map<String, String> dates = new HashMap<>();
    LocalDate localDate = DateUtils.localDateFtomString(date);
    localDate =getMonDay.get(localDate.getDayOfWeek().toString()).apply(localDate);
    
    dates.put("from", localDate.toString());
    dates.put("to", localDate.plusDays(7).toString());
    
    return dates;
    }


    private static Map<String, Function<LocalDate, LocalDate>> getMonDay;
    static {

        getMonDay = new HashMap<>();

        getMonDay.put("SUNDAY", (LocalDate date) ->date.plusDays(1));
        getMonDay.put("MONDAY", (LocalDate date) -> date);
        getMonDay.put("TUESDAY", (LocalDate date) -> date.minusDays(1));
        getMonDay.put("WEDNESDAY", (LocalDate date) -> date.minusDays(2));
        getMonDay.put("THURSDAY", (LocalDate date) -> date.minusDays(3));
        getMonDay.put("FRIDAY", (LocalDate date) -> date.minusDays(4));
        getMonDay.put("SATURDAY", (LocalDate date) -> date.minusDays(5));

    }

    public List<String[]> getArray() {
        return daysWeekStartToEnd;
    };


    public void print() {
        for (String[] dates : getArray())
            System.out.printf("start : %s end : %s \n", dates[0], dates[1]);
    }

    
}
