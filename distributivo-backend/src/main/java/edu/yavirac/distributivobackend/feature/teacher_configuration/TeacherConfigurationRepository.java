package edu.yavirac.distributivobackend.feature.teacher_configuration;

import java.util.List;

import org.springframework.data.jdbc.repository.query.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;


public interface TeacherConfigurationRepository extends CrudRepository<TeacherConfiguration, Long> {

    final String CONSULT =   "SELECT th.id,teacher.name as teacher, d.name as "+
    "day, ht.hour FROM teacher_hour as th JOIN teacher " + 
   "ON teacher.id = th.teacher JOIN hours_table ht ON th.hour = ht.id " +
   "JOIN day as d ON d.id = th.day WHERE teacher.archived = true ";

    final String SELECT_ALL_PAGEABLE = CONSULT + "LIMIT :limit offset :offset";
    final String SELECT_BY_TEACHER_PAGEABLE = CONSULT + "and teacher.id=:id LIMIT :limit offset :offset";

    
    final String FIND_IGNORE_CASE = CONSULT +" and name LIKE '%' || :name || '%'";

    final String FIND_ALL = CONSULT;
    final String COUNT = "SELECT COUNT(*) FROM teacher_hour";

    @Query(value = SELECT_ALL_PAGEABLE)
    List<TeacherConfigurationDTO> findAllPageable(@Param("limit") long limit, @Param("offset") long offset );

    @Query(value = FIND_IGNORE_CASE)
    List<TeacherConfigurationDTO> findByNameLikeIgnoreCase(@Param("name") String term);
    
    @Query(value = FIND_ALL)
    List<TeacherConfigurationDTO> findAllConxult();

    @Query(value = COUNT)
    long count();

    @Query(value = SELECT_BY_TEACHER_PAGEABLE)
    List<TeacherConfigurationDTO> findByTeacher(@Param("id") long id,@Param("limit") long limit, @Param("offset") long offset );
}