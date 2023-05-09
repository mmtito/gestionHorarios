package edu.yavirac.distributivobackend.feature.grade;
import java.io.IOException;
import java.util.List;

import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import edu.yavirac.distributivobackend.dto.ResponseApp;

@CrossOrigin({"*"})
@RestController
@RequestMapping("/api/grade")
public class GradeController {
    @Autowired
    GradeService gradeService;

    @PostMapping()
    @PreAuthorize("hasAuthority('GRADE_CREAR')")
    public Grade save(@RequestBody Grade grade){
       
    	return gradeService.save(grade);
    }
    
    @GetMapping("/select/{name}")
    @PreAuthorize("hasAuthority('GRADE_LEER')")
    public List<GradeSelect> findNameSelect(@PathVariable String name){
        return gradeService.findNameSelect(name);
    }

    
    @GetMapping("/{id}")
    @PreAuthorize("hasAuthority('GRADE_LEER')")
    public Grade findById(@PathVariable long id){
        return gradeService.findById(id);
    }
    
    @GetMapping()
    @PreAuthorize("hasAuthority('GRADE_LEER')")

    public List<GradeForCareer> findAllByCareer(
    ){
       
        return gradeService.findAllByCareer();
    }

   /* @GetMapping()
    @PreAuthorize("hasAuthority('GRADE_LEER')")
    public GradeDTO findAll(
        @RequestParam(value="count", defaultValue = "20", required = false) long capacity,
        @RequestParam(value = "page", defaultValue = "0", required = true) long page
    ){
       
        return gradeService.findAll(capacity, page);
    }
    */
    @PostMapping("/update")
    @PreAuthorize("hasAuthority('GRADE_ACTUALIZAR')")
    public Grade update(@RequestBody Grade grade)
    {
        return gradeService.update(grade);
    }

    @PreAuthorize("hasAuthority('GRADE_ELIMINAR')")
    @GetMapping("delete/{id}")
    public ResponseApp delete(@PathVariable long id){
        return gradeService.deleteById(id);
        
    }
    
    @PreAuthorize("hasAuthority('GRADE_LEER')")
    @GetMapping("/find/{name}")
    public List<GradeForCareer> findByName(@PathVariable String name){
        return gradeService.findByNameForCareer(name);
    }
    
    @PostMapping(value = "/import-excel")
    @PreAuthorize("hasAuthority('GRADE_LEER')")
    public ResponseApp importExcelFile(@RequestParam("file") MultipartFile files) throws IOException {
        
        return gradeService.importExcel(files);
    }
    
    @GetMapping("/export-to-excel")
    @PreAuthorize("hasAuthority('GRADE_GENERAR-EXCEL')")
    public void exportIntoExcelFile(HttpServletResponse response) throws IOException {

        gradeService.generateExcelFile(response);
    }

    @GetMapping("/findAll")
    @PreAuthorize("hasAuthority('GRADE_LEER')")
    public List<Grade> findAll(){
        return gradeService.findAll();
    }

    @GetMapping("/careers")
    @PreAuthorize("hasAuthority('GRADE_LEER')")
    public List<Career> getCareers(){
        return gradeService.getCareers();
    }
    
   
}
