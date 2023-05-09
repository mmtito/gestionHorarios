package edu.yavirac.distributivobackend.feature.teacher_configuration;

import lombok.Data;

import org.springframework.data.annotation.Id;
import org.springframework.data.relational.core.mapping.Table;

@Data
@Table("public\".\"teacher_hour")
public class TeacherConfiguration {
    @Id
    private long id;
    private long teacher;
    private long hour;
    private long day;

}