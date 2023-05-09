package edu.yavirac.distributivobackend.feature.time;

import org.springframework.data.repository.CrudRepository;
import java.util.List;

public interface DayRepository extends CrudRepository<Day, Long> {
    List<Day> findAll();
}
