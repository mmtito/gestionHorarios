package edu.yavirac.distributivobackend.feature.time;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class TimeService {

    @Autowired DayRepository dayRepository;
    @Autowired HourRepository hourRepository;

    public List<Hour> getHours(){
        return hourRepository.findAll();
    }
    public List<Day> getDays(){
        return dayRepository.findAll();
    }
    
}