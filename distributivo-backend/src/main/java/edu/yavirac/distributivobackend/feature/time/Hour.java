package edu.yavirac.distributivobackend.feature.time;

import org.springframework.data.annotation.Id;
import org.springframework.data.relational.core.mapping.Table;

import lombok.Data;

@Data
@Table("hours_table")
public class Hour {
    @Id
    private Long id;
    private String hour;
    private int time_position;
    
}
