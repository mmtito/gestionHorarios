package edu.yavirac.distributivobackend.feature.subject;

import java.util.List;

import org.springframework.data.jdbc.repository.query.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import edu.yavirac.distributivobackend.feature.classroom.ClassroomConsult;

public interface SubjectRepository extends CrudRepository<Subject, Long > {
	
	
	final String GET_SELECT_PAGEABLE = "select id, name from subject where status=true and name ilike '%'|| :name  ||'%' LIMIT 20";
	final String GET_ALL_PAGEABLE = "select * from subject where status=true LIMIT :limit OFFSET :offset";
	final String COUNT = "SELECT COUNT(*) FROM subject WHERE status = true";
	
    @Query("SELECT * FROM subject WHERE status=true")
    List<Subject>findAll();
    
    @Query(value = GET_ALL_PAGEABLE)
    List<Subject> findAllPageable(@Param("limit") long limit, @Param("offset") long offset );

    @Query(value = GET_SELECT_PAGEABLE)
    List<SubjectSelect> findSelectPageable(@Param("name") String name);
    
    @Query(value = COUNT)
    long count();    
    
    List<Subject> findByNameLikeIgnoreCase(String term);
}
