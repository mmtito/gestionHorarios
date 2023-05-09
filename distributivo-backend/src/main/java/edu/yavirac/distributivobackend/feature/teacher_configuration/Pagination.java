package edu.yavirac.distributivobackend.feature.teacher_configuration;
import java.util.List;

import lombok.Data;

@Data()
public class Pagination {
    private long total;
    private long page;
    private long totalPages;
    private long capacity;
    private List<TeacherConfigurationDTO> teacherConfigurations;
}
