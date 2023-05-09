package edu.yavirac.distributivobackend.feature.subject;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/subject")
@CrossOrigin({"*"})
public class SubjectController {
    @Autowired
    SubjectService subjectService;

    @GetMapping("/findAll")
    public List<Subject> findAll(){
        return subjectService.findAll();
    }

    @GetMapping("/findById/{id}")
    @PreAuthorize("hasAuthority('SHOOL-PERIOD_LEER')")
    public Subject findById(@PathVariable long id){
        return subjectService.findById(id);
    }
    
    @GetMapping()
    @PreAuthorize("hasAuthority('SHOOL-PERIOD_LEER')")
    public Paginable findAllPageable(
    		   @RequestParam(value="count", defaultValue = "10", required = false) long capacity,
    	       @RequestParam(value = "page", defaultValue = "0", required = false) long page
    		
    ) {
    	
    	return subjectService.findAllPaginable(capacity, page);
    	
    }
    
    @GetMapping("/select/{name}")
    @PreAuthorize("hasAuthority('SHOOL-PERIOD_LEER')")
    public List<SubjectSelect> findByNameSelectPageable(
    		@PathVariable String name
    		){
    	
    	return subjectService.findByNameSelectPageable(name);    	
    }
    
    
    @PostMapping("/save")
    //@PreAuthorize("hasAuthority('SHOOL-PERIODL-CREAR')")
    public Subject save(@RequestBody Subject subject){
        return subjectService.save(subject);
    }

    @DeleteMapping("/deleteById/{id}")
    //@PreAuthorize("hasAuthority('SHOOL-ELIMINAR')")
    public void deleteById(@PathVariable long id){
        subjectService.deleteById(id);
    }

    @GetMapping("/findByName/{term}")
    public List<Subject> findByNameLikeIgnoreCase (@PathVariable String term){
        return subjectService.findByNameLikeIgnoreCase(term + "%");
    }
}
