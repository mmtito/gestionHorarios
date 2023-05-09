package edu.yavirac.distributivobackend.feature.subject;

import java.util.List;

import edu.yavirac.distributivobackend.feature.classroom.ClassroomConsult;
import lombok.Data;

@Data
public class Paginable {
	
    private long total;
    private long page;
    private long totalPages;
    private long capacity;
    private List<Subject> subjects;

}
