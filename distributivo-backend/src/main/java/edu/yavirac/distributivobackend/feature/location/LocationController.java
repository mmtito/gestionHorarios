package edu.yavirac.distributivobackend.feature.location;

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
@RequestMapping("/api/location")
public class LocationController {
    @Autowired
    LocationService locationService;

    @PostMapping()
    @PreAuthorize("hasAuthority('LOCATION_CREAR')")
    public Location save(@RequestBody Location Location){
        return locationService.save(Location);
    }

    @GetMapping("/{id}")
    @PreAuthorize("hasAuthority('LOCATION_LEER')")
    public Location findById(@PathVariable long id){
        return locationService.findById(id);
    }

    @GetMapping()
    @PreAuthorize("hasAuthority('LOCATION_LEER')")
    public LocationDTO findAll(
        @RequestParam(value="count", defaultValue = "20", required = false) long capacity,
        @RequestParam(value = "page", defaultValue = "0", required = true) long page
    ){
       
        return locationService.findAllPageable(capacity, page);
    }

    @PutMapping("/")
    @PreAuthorize("hasAuthority('LOCATION_ACTUALIZAR')")
    public Location update(@RequestBody Location Location,@PathVariable long id)
    {
        return locationService.update(id,Location);
    }
    @ResponseStatus(HttpStatus.NO_CONTENT)
    @GetMapping("delete/{id}")
    @PreAuthorize("hasAuthority('LOCATION_ELIMINAR')")
    public ResponseApp delete(@PathVariable long id){
        
        return locationService.deleteById(id);
    }

    @GetMapping("/findAll")
    @PreAuthorize("hasAuthority('LOCATION_LEER')")
    public List<Location> findAll(){
       
        return locationService.findAll();
    }


    @GetMapping("/find/{name}")
    @PreAuthorize("hasAuthority('LOCATION_LEER')")
    public List<Location> findByName(@PathVariable String name){
        return locationService.findByName(name);
    }
    
    @PostMapping(value = "/import-excel")
    @PreAuthorize("hasAuthority('LOCATION_GENERAR-EXCEL')")
    public ResponseApp importExcelFile(@RequestParam("file") MultipartFile files) throws IOException {
        return locationService.importExcel(files);
    }
    
    @GetMapping("/export-to-excel")
    @PreAuthorize("hasAuthority('LOCATION_IMPORTAR-EXCEL')")
    public void exportIntoExcelFile(HttpServletResponse response) throws IOException {

        locationService.generateExcelFile(response);
    }
   
}
