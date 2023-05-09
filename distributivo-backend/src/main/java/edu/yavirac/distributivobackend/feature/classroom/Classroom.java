package edu.yavirac.distributivobackend.feature.classroom;

import lombok.Data;

//import javax.validation.constraints.NotBlank;

import org.springframework.data.annotation.Id;
import org.springframework.data.relational.core.mapping.Column;
import org.springframework.data.relational.core.mapping.Table;


@Data
@Table("public\".\"classrooms")
public class Classroom {
    @Id
    @Column("id") 
    private Long id;
    //@NotBlank
    private String code;
    //@NotBlank
    private Long type;
    //@NotBlank
    private Long location;
    //@NotBlank
    private String name;
    //@NotBlank
    private Long capacity;
    private String description;
    private boolean status =  true;
}