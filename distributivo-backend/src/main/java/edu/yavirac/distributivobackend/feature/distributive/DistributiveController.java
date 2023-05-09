package edu.yavirac.distributivobackend.feature.distributive;

import java.io.IOException;
import java.util.List;

import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@RestController
@RequestMapping("/api/distributive")
@CrossOrigin({ "*" })
public class DistributiveController {
    @Autowired
    DistributiveService distributiveService;
    	
    @PreAuthorize("hasAuthority('DISTRIBUTIVE_LEER')")
    @GetMapping("/findAll")
    public List<DistributiveDTO> findAll() {
        return distributiveService.findAll();
    }
    
    @PreAuthorize("hasAuthority('DISTRIBUTIVE_LEER')")
    @GetMapping("/findByDistributiveId/{id}")
    public DistributiveDTO findByIdDistributive(@PathVariable long id) {
        return distributiveService.findByDistributiveId(id);
    }
    
    @PreAuthorize("hasAuthority('DISTRIBUTIVE_LEER')")
    @GetMapping("/findByIdTeacher/{id}")
    public List<DistributiveDTO> findByTeacherId(@PathVariable long id) {
        return distributiveService.findByTeacherId(id);
    }
    
    @PreAuthorize("hasAuthority('DISTRIBUTIVE_CREAR')")
    @PostMapping("/save")
    public Distributive save(@RequestBody Distributive distributive) {
        return distributiveService.save(distributive);
    }
    
    @PreAuthorize("hasAuthority('DISTRIBUTIVE_LEER')")
    @GetMapping("/findByName/{name}")
    public List<DistributiveDTO> findByName(@PathVariable String name){
        return distributiveService.findByName(name);
    }

    @PreAuthorize("hasAuthority('DISTRIBUTIVE_LEER')")
    @GetMapping("/findByTeacherDni/{dni}")
    public List<DistributiveDTO> findByTeacherDni(@PathVariable String dni) {
        return distributiveService.findByTeacherDni(dni + "%");
    }
    
    @PreAuthorize("hasAuthority('DISTRIBUTIVE_LEER')")
    @GetMapping("/findByTeacherName/{name}")
    public List<DistributiveDTO> findByTeacherName(@PathVariable String name) {
        return distributiveService.findByTeacherName(name + "%");
    }
    
    @PreAuthorize("hasAuthority('DISTRIBUTIVE_LEER')")
    @GetMapping("/findByTeacherLastname/{lastname}")
    public List<DistributiveDTO> findByTeacherLastname(@PathVariable String lastname) {
        return distributiveService.findByTeacherLastname(lastname + "%");
    }
    
    @PreAuthorize("hasAuthority('DISTRIBUTIVE_LEER')")
    @GetMapping("/findByPeriodoName/{periodo}")
    public List<DistributiveDTO> findByPeriodoName(@PathVariable String periodo) {
        return distributiveService.findByPeriodoName(periodo + "%");
    }

    //@PreAuthorize("hasAuthority('DISTRIBUTIVE_LEER')")
    @GetMapping("/findByCareerName/{career}")
    public List<DistributiveDTO> findByCareerName(@PathVariable String career) {
        return distributiveService.findByCareerName(career + "%");
    }
    
    @PreAuthorize("hasAuthority('DISTRIBUTIVE_GENERAR-EXCEL')")
    @GetMapping("/exportExcel")
    public void generateExcelFile(HttpServletResponse response) throws IOException{
        distributiveService.generateExcelFile(response);
    }
}