package edu.yavirac.distributivobackend.feature.subject;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import edu.yavirac.distributivobackend.feature.classroom.ClassroomDTO;
import edu.yavirac.distributivobackend.feature.teacher.TeacherRepository;

@Service
public class SubjectService {
    @Autowired
    SubjectRepository  subjectRepository;

    public List<Subject> findAll(){
        return subjectRepository.findAll();
    }
    

    public Paginable findAllPaginable(long capacity, long page) {

        long offset = page <= 0 ? 0 : page * capacity;

        Paginable dto = new Paginable();
        dto.setSubjects(subjectRepository.findAllPageable(capacity, page));
        dto.setTotal(subjectRepository.count());
        dto.setTotalPages(dto.getTotal() / capacity + 1);
        dto.setCapacity(capacity);
        dto.setPage(page);

        return dto;

    }
    
    public List<SubjectSelect> findByNameSelectPageable(String name){
    	
    	return subjectRepository.findSelectPageable(name);
    	
    }

    public Subject findById(long id){
        return subjectRepository.findById(id).orElse(new Subject());
    }

    public Subject save(Subject subject){
        return subjectRepository.save(subject);

    }

    public void deleteById(long id){
        subjectRepository.deleteById(id);
    }

    public List<Subject> findByNameLikeIgnoreCase (String term){
        return subjectRepository.findByNameLikeIgnoreCase(term + "%");
    }
}
