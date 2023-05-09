package edu.yavirac.distributivobackend.feature.teacher_configuration;

import java.io.IOException;
import java.util.List;

import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import edu.yavirac.distributivobackend.dto.ResponseApp;

@CrossOrigin({"*"})
@RestController
@RequestMapping("/api/teacher-configuration")
public class TeacherConfigurationController {
    @Autowired
    TeacherConfigurationService teacherConfigurationService;

    @PostMapping()
    @PreAuthorize("hasAuthority('TEACHER-CONFIGURATION_CREAR')")
    public TeacherConfiguration save(@RequestBody TeacherConfiguration TeacherConfiguration){
        return teacherConfigurationService.save(TeacherConfiguration);
    }

    @GetMapping("/{id}")
    @PreAuthorize("hasAuthority('TEACHER-CONFIGURATION_LEER')")
    public TeacherConfiguration findById(@PathVariable long id){
        return teacherConfigurationService.findById(id);
    }

    @GetMapping()
    @PreAuthorize("hasAuthority('TEACHER-CONFIGURATION_LEER')")
    public Pagination findAll(
        @RequestParam(value="count", defaultValue = "10", required = false) long capacity,
        @RequestParam(value = "page", defaultValue = "0", required = true) long page
    ){
       
        return teacherConfigurationService.findAllPageable(capacity, page);
    }

    @PutMapping()
    @PreAuthorize("hasAuthority('TEACHER-CONFIGURATION_ACTUALIZAR')")
    public TeacherConfiguration update(@RequestBody TeacherConfiguration TeacherConfiguration)
    {
        return teacherConfigurationService.update(TeacherConfiguration);
    }

    @GetMapping("delete/{id}")
    @PreAuthorize("hasAuthority('TEACHER-CONFIGURATION_ELIMINAR')")
    public ResponseApp delete(@PathVariable long id){
        
        return teacherConfigurationService.deleteById(id);
    }

    @GetMapping("/findAll")
    @PreAuthorize("hasAuthority('TEACHER-CONFIGURATION_LEER')")
    public List<TeacherConfigurationDTO> findAll(){
       
        return teacherConfigurationService.findAll();
    }


    @GetMapping("/find/{name}")
    public List<TeacherConfigurationDTO> findByName(@PathVariable String name){
        return teacherConfigurationService.findByName(name);
    }
    @PostMapping(value = "/import-excel")
    public ResponseApp importExcelFile(@RequestParam("file") MultipartFile files) throws IOException {
        return teacherConfigurationService.importExcel(files);
    }
    
    @GetMapping("/export-to-excel")
    public void exportIntoExcelFile(HttpServletResponse response) throws IOException {

        teacherConfigurationService.generateExcelFile(response);
    }

    @GetMapping("/teacher/{id}")
    @PreAuthorize("hasAuthority('TEACHER-CONFIGURATION_LEER')")
    public Pagination findByTeacher(
        @RequestParam(value="count", defaultValue = "20", required = false) long capacity,
        @RequestParam(value = "page", defaultValue = "0", required = false) long page,
        @PathVariable long id
        ){
       
        return teacherConfigurationService.findByTeacherId(capacity, page, id);
    }
   
}
