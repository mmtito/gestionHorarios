package edu.yavirac.distributivobackend.feature.teacher;

import java.io.IOException;
import java.util.List;

import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping("/api/teacher")
@CrossOrigin({"*"})
public class TeacherController {
    @Autowired
    TeacherService teacherService;
    
    @GetMapping("/findAll")
    @PreAuthorize("hasAuthority('TEACHER_LEER')")
    public List<Teacher> findAll(){
        return teacherService.findAll();
    }

    @GetMapping("/findAllFalse")
    public List<Teacher> findAllFalse(){
        return teacherService.findAllFalse();
    }

    @PostMapping("/save")
    @PreAuthorize("hasAuthority('TEACHER_CREAR')")
    public Teacher save(@RequestBody Teacher teacher){
        return teacherService.save(teacher);
    }

    @GetMapping("/findById/{id}")
    @PreAuthorize("hasAuthority('TEACHER_LEER')")
    public Teacher findById (@PathVariable long id ){
        return teacherService.findById(id);
    }

    @GetMapping("/findByName/{term}")
    @PreAuthorize("hasAuthority('TEACHER_LEER')")
    public List<Teacher> findByName( @PathVariable String term){
        return teacherService.findByNameLikeIgnoreCase(term + "%");
    }
    
    @GetMapping("/exportExcel")
    @PreAuthorize("hasAuthority('TEACHER_GENERAR-EXCEL')")
    public void generateExcelFile(HttpServletResponse response) throws IOException {
        teacherService.generateExcelFile(response);
    }
}
