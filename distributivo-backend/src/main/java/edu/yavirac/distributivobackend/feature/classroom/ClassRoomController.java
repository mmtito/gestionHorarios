package edu.yavirac.distributivobackend.feature.classroom;

import java.io.IOException;
import java.util.List;
import edu.yavirac.distributivobackend.dto.ResponseApp;

import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

@CrossOrigin({"*"})
@RestController
@RequestMapping("/api/classroom")
public class ClassRoomController {
    @Autowired
    ClassRoomService classroomService;

    
    @PostMapping()
    @PreAuthorize("hasAuthority('CLASSROOM_CREAR')")
    public Classroom save(@RequestBody Classroom classroom){
        return classroomService.save(classroom);
    }
    @PreAuthorize("hasAuthority('CLASSROOM_LEER')")
    @GetMapping("/{id}")
    public Classroom findById(@PathVariable long id){
        return classroomService.findById(id);
    }

    @GetMapping()
    @PreAuthorize("hasAuthority('CLASSROOM_LEER')")
    public ClassroomDTO findAllConsult(
        @RequestParam(value="count", defaultValue = "10", required = false) long capacity,
        @RequestParam(value = "page", defaultValue = "0", required = true) long page
    ){
       
        return classroomService.findAllConsult(capacity, page);
    }
    
    @GetMapping("/findAll")
    public List<Classroom> findAll(){
       
        return classroomService.findAll();
    }
    
    @PostMapping("/update")
    @PreAuthorize("hasAuthority('CLASSROOM_ACTUALIZAR')")
    public Classroom update(@RequestBody Classroom classroom)
    {
        return classroomService.update(classroom);
    }

    @GetMapping("delete/{id}")
    @PreAuthorize("hasAuthority('CLASSROOM_ELIMINAR')")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public ResponseApp delete(@PathVariable long id){
       return classroomService.deleteById(id);
       
    }

    @GetMapping("/find/{name}")
    @PreAuthorize("hasAuthority('CLASSROOM_LEER')")
    public List<Classroom> findByName(@PathVariable String name){
        return classroomService.findByName(name);
    }
    @PostMapping(value = "/import-excel")
    @PreAuthorize("hasAuthority('CLASSROOM_IMPORTAR-EXCEL')")
    public ResponseApp importExcelFile(@RequestParam("file") MultipartFile files) throws IOException {
        
        return classroomService.importExcel(files);
    }
    @PreAuthorize("hasAuthority('CLASSROOM_GENERAR-EXCEL')")
    @GetMapping("/export-to-excel")
    public void exportIntoExcelFile(HttpServletResponse response) throws IOException {

        classroomService.generateExcelFile(response);
    }
   
}
