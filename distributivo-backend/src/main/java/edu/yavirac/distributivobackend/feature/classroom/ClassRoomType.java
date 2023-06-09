package edu.yavirac.distributivobackend.feature.classroom;

import java.util.HashSet;
import java.util.Set;

//import javax.validation.constraints.NotBlank;

import org.springframework.data.annotation.Id;
import org.springframework.data.relational.core.mapping.MappedCollection;
import org.springframework.data.relational.core.mapping.Table;

import lombok.Data;

@Data
@Table("public\".\"classroom_types")
public class ClassRoomType {
    @Id
    private Long id;
    //@NotBlank
    private String code;
    //@NotBlank
    private String name;
    private boolean status = true;
    @MappedCollection(keyColumn = "type", idColumn = "id")
    private Set<Classroom> classroom = new HashSet<Classroom>();
}
