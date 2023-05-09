package edu.yavirac.distributivobackend.feature.time;
import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.relational.core.mapping.Table;


@Data
@Table("day")
public class Day {
    @Id
    private Long id;
    private String name;
    private String posicion;
    
}
