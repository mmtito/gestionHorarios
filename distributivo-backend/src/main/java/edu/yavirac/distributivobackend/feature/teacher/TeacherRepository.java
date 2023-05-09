package edu.yavirac.distributivobackend.feature.teacher;

import java.util.List;

import org.springframework.data.jdbc.repository.query.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

public interface TeacherRepository extends CrudRepository <Teacher, Long> {
    
    @Query(value = "SELECT * FROM teacher WHERE archived=true")
    List<Teacher>findAll();

    @Query(value = "SELECT * FROM teacher WHERE archived=false")
    List<Teacher>findAllFalse();
    
    @Query(value = "SELECT * FROM teacher WHERE name ILIKE '%'|| :term  ||'%' AND archived=true ;")
    List<Teacher> findByNameLikeIgnoreCase(@Param("term") String term);
    
}
