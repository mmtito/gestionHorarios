package edu.yavirac.distributivobackend.feature.schedule;

import java.io.IOException;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.ByteArrayResource;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.itextpdf.text.DocumentException;

import edu.yavirac.distributivobackend.util.ScheduleUtils;

@RestController
@RequestMapping("/api/schedule")
public class ScheduleControllers {
    @Autowired
    private ScheduleService scheduleService;
    @Autowired
    private ReportScheduleService reportScheduleService;

    @GetMapping()
    @PreAuthorize("hasAuthority('SCHEDULE_LEER')")
    public Schedule findEvenetsSchedule(
        @RequestParam( value = "teacher" , required = false ) Long teacher,
        @RequestParam( value = "period" , required = false ) Long periood,
        @RequestParam( value = "grade", required = false ) Long grade,
        @RequestParam( value = "room", required = false ) Long classroom,
        @RequestParam( value = "date", required = false) String date
    
        
    ){
    	Map<String, String> dates = ScheduleUtils.getToFrom(date);
        ScheduleOptionsConsultDto options = new ScheduleOptionsConsultDto(
        		teacher, periood, grade, classroom, dates.get("from"), dates.get("to"));
        
        return scheduleService.findEventsSchedule(options);
    }

    @PostMapping("")
    @PreAuthorize("hasAuthority('SCHEDULE_CREAR')")
    public TimeConfiguration save(@RequestBody SaveEventDTO event){
        return scheduleService.save(event);
    }

    @PostMapping("import-excel")
    @PreAuthorize("hasAuthority('SCHEDULE_IMPORTAR-EXCEL')")
    public void importExcel(@RequestParam("file") MultipartFile file) throws IOException {
     scheduleService.importExcel(file);

    }

    @PostMapping("/range")
    @PreAuthorize("hasAuthority('SCHEDULE_CREAR')")
    public void saveRange(@RequestBody SaveRangeDTO data){
        scheduleService.saveRange(data);
    }


    @GetMapping("delete/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    @PreAuthorize("hasAuthority('SCHEDULE_ELIMINAR')")
    public void deleteEvent(@PathVariable Long id){
        this.scheduleService.deleteEvent(id);
    }

    @GetMapping("generate-report")
    @PreAuthorize("hasAuthority('SCHEDULE_LEER')")
    public ResponseEntity<ByteArrayResource> generateReport(
        @RequestParam( value = "teacher" , required = false ) Long teacher,
        @RequestParam( value = "period" , required = false ) Long periood,
        @RequestParam( value = "grade", required = false ) Long grade,
        @RequestParam( value = "room", required = false ) Long classroom,
        @RequestParam( value = "td", required = false) String to,
        @RequestParam( value = "fd", required = false) String from
    ) throws IOException, DocumentException{

        ScheduleOptionsConsultDto options = new ScheduleOptionsConsultDto(teacher, periood, grade, classroom, from, to);

        return this.reportScheduleService.generateReport(options);

    } 

}
