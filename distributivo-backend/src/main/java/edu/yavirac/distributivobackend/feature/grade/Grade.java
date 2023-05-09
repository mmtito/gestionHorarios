package edu.yavirac.distributivobackend.feature.grade;

import lombok.Data;

//import javax.validation.constraints.NotBlank;

import org.springframework.data.annotation.Id;
import org.springframework.data.relational.core.mapping.Column;
import org.springframework.data.relational.core.mapping.Table;


@Data
@Table("public\".\"classrooms")
public class Grade {
    @Id
    @Column("id") 
    private Long id;
    //@NotBlank
    private String name;
    private Long workingDay;
    private Long level;
    private Long parallel;
    //@NotBlank
    private Long career;
    private boolean status =  true;
}
