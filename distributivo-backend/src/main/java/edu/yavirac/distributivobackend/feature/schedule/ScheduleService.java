package edu.yavirac.distributivobackend.feature.schedule;


import java.io.IOException;

import java.sql.Date;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.apache.poi.ss.usermodel.CellType;
import org.apache.poi.xssf.usermodel.XSSFCell;
import org.apache.poi.xssf.usermodel.XSSFRow;
import org.apache.poi.xssf.usermodel.XSSFSheet;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import edu.yavirac.distributivobackend.config.Conexion;
import edu.yavirac.distributivobackend.dto.ResponseApp;
import edu.yavirac.distributivobackend.exception.ResourceNotFoundException;

@Service
public class ScheduleService {
    @Autowired
    private ScheduleRespository scheduleRespository;
    @Autowired
    private TimeConfigurationRepository timeConfigurationRepository;

    @Autowired
    private Conexion conn;

    public ResponseApp deleteEvent(Long id) {

        timeConfigurationRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException(id, "id", "evento"));

        timeConfigurationRepository.deleteById(id);

        return new ResponseApp("Evento eliminado correctamente", id);
    }

    public TimeConfiguration save(SaveEventDTO event) {

        String day = event.getDate().getDayOfWeek().toString();
        HourAndDay hourAndDay = scheduleRespository.selectIdHourAndDay(event.getHour(), day);
        TimeConfiguration timeConfiguration = new TimeConfiguration();
        timeConfiguration.setClassroom(event.getClassroom());
        timeConfiguration.setDate(event.getDate());
        timeConfiguration.setOccupiedBy(event.getOccupiedBy());
        timeConfiguration.setSchoolPeriod(event.getSchoolPeriod());
        timeConfiguration.setDay(hourAndDay.getDayId());
        timeConfiguration.setHour(hourAndDay.getHourId());
        return timeConfigurationRepository.save(timeConfiguration);
    }

    // get Schedule
    public Schedule findEventsSchedule(ScheduleOptionsConsultDto options) {

        if (isEmptyParams(options))
            options.setClassroom(2222222222223432222L);

        List<ScheduleConsult> scheduleConsults = ScheduleRespository.findAllFilteredEvents(options, conn);
        List<HourEntity> hoursDatabase = scheduleRespository.findHours();

        Schedule schedule = new Schedule();

        schedule.setToFrom(generateDaysArray(options.getFrom(), options.getTo()));

        List<Hour> hours = new ArrayList<>();
        Hour event;
        List<Event> events;

        for (HourEntity hourDatabase : hoursDatabase) {
            event = new Hour();
            event.setPosition(hourDatabase.getHour());

            events = filterEventsOfHour(scheduleConsults, hourDatabase.getHour());

            event.setEvents(events);
            hours.add(event);
            schedule.setHours(hours);

        }

        return schedule;

    };

    // SAVE FOR RANGE
    public void saveRange(SaveRangeDTO data) {
        LocalDate to = data.getRangeOpt().getEnd();
        LocalDate from = data.getRangeOpt().getStart();
        List<Day> daysDb = scheduleRespository.findAllDays();
        List<DayWeekSelect> days = filterSelectDays(data.getRangeOpt().getDays());

        Integer hourId = scheduleRespository.findIdHour(data.getHour());

        to = to.plusDays(1);

        while (!to.isEqual(from)) {

            for (DayWeekSelect day : days) {
                if (day.getName().equals(from.getDayOfWeek().toString())) {

                    TimeConfiguration newTime = new TimeConfiguration();
                    Day dayDb = getDay(daysDb, from);

                    newTime.setClassroom(data.getClassroom());
                    newTime.setDate(from);
                    newTime.setDay(dayDb.getId());
                    newTime.setHour(hourId);
                    newTime.setOccupiedBy(data.getOccupiedBy());
                    newTime.setSchoolPeriod(data.getSchoolPeriod());

                    timeConfigurationRepository.save(newTime);
                    continue;

                }
            }

            from = from.plusDays(1);

        }
    }

    

    private Day getDay(List<Day> days, LocalDate currentDate) {
        String currentDay = currentDate.getDayOfWeek().toString();
        Day dayDb = days.stream().filter((day) -> {
            return currentDay.toLowerCase().equals(day.getName()
                    .toLowerCase());
        }).findAny().orElseThrow(null);

        return dayDb;

    }

    private List<DayWeekSelect> filterSelectDays(List<DayWeekSelect> days) {
        return days.stream().filter(
                (dayy) -> dayy.getSelect()).toList();

    }

    private List<Event> filterEventsOfHour(List<ScheduleConsult> scheduleConsults, String hour) {
        Event currentEvent;
        List<Event> events = new ArrayList<Event>();
        Teacher teacherEvent;

        for (ScheduleConsult consult : scheduleConsults) {

            currentEvent = new Event();
            if (consult.getHour().equals(hour)) {
                currentEvent.setClassroom(consult.getClassroom());
                currentEvent.setDay(consult.getDate());
                currentEvent.setHour(consult.getHour());
                currentEvent.setSubject(consult.getSubject());
                currentEvent.setGrade(consult.getGrade());
                currentEvent.setId(consult.getId());

                teacherEvent = new Teacher();
                teacherEvent.setName(consult.getTeacher());
                teacherEvent.setColor(consult.getColor());
                currentEvent.setTeacher(teacherEvent);

                events.add(currentEvent);
            }

        }

        return events;

    }

    public void importExcel(MultipartFile files) throws IOException {
        XSSFRow row;

        try (XSSFWorkbook workbook = new XSSFWorkbook(files.getInputStream())) {
            XSSFSheet worksheet = workbook.getSheetAt(0);

            for (int index = 2; index < worksheet.getPhysicalNumberOfRows(); index++) {

                row = worksheet.getRow(index);
                if (row == null)
                    break;
                saveColumn(row);

            }

        }
    }

    private void saveColumn(XSSFRow row) {
        Map<String, String> dataValuesMap = new HashMap<>();

        addValuetoMap("period", dataValuesMap, row.getCell(0));

        addValuetoMap("classroom", dataValuesMap, row.getCell(2));
        addValuetoMap("date", dataValuesMap, row.getCell(4));
        addValuetoMap("hour", dataValuesMap, row.getCell(5));
        addValuetoMap("subject", dataValuesMap, row.getCell(6));
        addValuetoMap("ced_doc", dataValuesMap, row.getCell(8));
        addValuetoMap("grade", dataValuesMap, row.getCell(10));

        TimeConfiguration timeConfiguration = generateTimeConf(dataValuesMap);

        if (timeConfiguration != null)
            scheduleRespository.save(timeConfiguration);

    }

    private TimeConfiguration generateTimeConf(Map<String, String> map) {
        String grade = map.get("grade");
        Date date = Date.valueOf(map.get("date").replaceAll("/", "-"));

        String day = date.toLocalDate().getDayOfWeek().toString();

        TimeConfiguration timeConfiguration = new TimeConfiguration();

        ConsultIds idDis = scheduleRespository
                .getIdDisByParameters(map
                        .get("ced_doc"), map.get("period"), map.get("subject"), grade,
                        map
                                .get("hour"),
                        map.get("classroom"), day);

        timeConfiguration.setClassroom(idDis.getClassroom());
        timeConfiguration.setDate(Date.valueOf(map.get("date").replaceAll("/", "-")).toLocalDate());

        timeConfiguration.setDay(idDis.getDay());
        timeConfiguration.setHour(idDis.getHour());
        timeConfiguration.setOccupiedBy(idDis.getId());
        timeConfiguration.setSchoolPeriod(idDis.getPeriod());

        return timeConfiguration;

    }

    private void addValuetoMap(String key, Map<String, String> map, XSSFCell cell) {

        if (cell == null)
            return;

        if (cell.getCellType() == CellType.NUMERIC)
            map.put(key, String.valueOf(Math.round(cell.getNumericCellValue())));

        if (cell.getCellType() == CellType.STRING)
            map.put(key, cell.getStringCellValue());

    }

    private List<String> generateDaysArray(String from, String to) {

        String[] fromArray = from.split("-");
        String[] toArray = to.split("-");

        LocalDate fromDate = LocalDate.of(Integer
                .valueOf(fromArray[0]), Integer.valueOf(fromArray[1]), Integer.valueOf(fromArray[2]));
        LocalDate toDate = LocalDate.of(Integer
                .valueOf(toArray[0]), Integer.valueOf(toArray[1]), Integer.valueOf(toArray[2]));
        List<String> days = new ArrayList<String>();

        if (fromDate.isAfter(toDate))
            throw new Error("la fecha de inicio es mayor a la fecha final");

        days.add(fromDate.toString());

        while (!fromDate.isEqual(toDate)) {
            fromDate = fromDate.plusDays(1);

            if (fromDate.isEqual(toDate))
                continue;

            days.add(fromDate.toString());
            // if(days.size() <= 6)

        }

        return days;
    }

    private boolean isEmptyParams(ScheduleOptionsConsultDto options) {

        return (options.getGrade() == null
                && options.getClassroom() == null
                && options.getTeacher() == null);

    }

}
