package edu.yavirac.distributivobackend.feature.time;

import org.springframework.data.repository.CrudRepository;
import java.util.List;
public interface HourRepository extends CrudRepository<Hour, Long> {
    List<Hour> findAll();
}
