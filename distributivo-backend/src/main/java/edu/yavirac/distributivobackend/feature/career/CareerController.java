package edu.yavirac.distributivobackend.feature.career;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

@RestController
@RequestMapping("/api/career")
@CrossOrigin({ "*" })
public class CareerController {
    @Autowired
    CareerService careerService;

    // FIND ALL

    @GetMapping("/findAll")
    @PreAuthorize("hasAuthority('CAREER_CREAR')")
    public List<Career> findAll() {
        return careerService.findAll();
    }

    //FIND ALL FALSE
    @GetMapping("/findAllFalse")
    @PreAuthorize("hasAuthority('CAREER_CREAR')")
    public List<Career> findAllFalse(){
        return careerService.findAllFalse();
    }
    // FIND BY ID
    @PreAuthorize("hasAuthority('CAREER_LEER')")
    @GetMapping("/findById/{id}")
    public Career findById(@PathVariable long id) {
        return careerService.findById(id);
    }

    // DELETE BY ID
    
    @PreAuthorize("hasAuthority('CAREER_ELIMINAR')")
    @GetMapping("/deleteById/{id}")
    public void deleteById(@PathVariable long id) {
        careerService.deleteById(id);
    }

    // SAVE

    @PreAuthorize("hasAuthority('CAREER_CREAR')")
    @PostMapping(path = "/save")
    public Career save(
            @RequestParam String name,
            @RequestParam(required = false) MultipartFile image,

            @RequestParam Integer duration) {
        return careerService.save(image, name, duration);

    }

    // UPDATE
    @PreAuthorize("hasAuthority('CAREER_ACTUALIZAR')")
    @PostMapping(path = "/update")
    public Career update(
            @RequestParam String name,
            @RequestParam(required = false) MultipartFile image,
            @RequestParam() Long id,
            @RequestParam Integer duration) {
        return careerService.update(image, name, duration, id);

    }

}
