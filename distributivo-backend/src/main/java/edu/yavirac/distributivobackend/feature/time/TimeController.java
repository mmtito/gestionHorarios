package edu.yavirac.distributivobackend.feature.time;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/time")
@CrossOrigin({"*"})
public class TimeController {

    @Autowired TimeService timeService;

    @GetMapping("/hour")
    @PreAuthorize("hasAuthority('TIME-HOUR_LEER')")
    public List<Hour> getHours(){
     return timeService.getHours();
    }

    @GetMapping("/day")
    @PreAuthorize("hasAuthority('TIME-DAY_LEER')")
    public List<Day> getDays(){
      return this.timeService.getDays();
    }
    
}
