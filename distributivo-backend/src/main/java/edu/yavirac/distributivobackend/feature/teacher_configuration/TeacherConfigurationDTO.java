package edu.yavirac.distributivobackend.feature.teacher_configuration;

import lombok.Data;

@Data
public class TeacherConfigurationDTO {

    private long id;
    private String teacher;
    private String day;
    private String hour;
    
}
