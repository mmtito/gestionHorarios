package edu.yavirac.distributivobackend.feature.role;


import java.util.List;

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
@CrossOrigin("*")
@RequestMapping("/api/role")
public class RoleController {
    
    @Autowired RoleService roleService;

    @PostMapping()
    @PreAuthorize("hasAuthority('ROL_CREAR')")
    public Role save(@RequestBody Role Role){
        return roleService.save(Role);
    }

    @PostMapping("/update")
    @PreAuthorize("hasAuthority('ROL_ACTUALIZAR')")
    public Role update(@RequestBody Role Role){
        return roleService.save(Role);
    }

    @GetMapping("/{id}")
    @PreAuthorize("hasAuthority('ROL_LEER')")
    public Role  findById(@PathVariable Long id){
        return roleService.findById(id);

    }

    @GetMapping("/find/{name}")
    @PreAuthorize("hasAuthority('ROL_LEER')")
    public List<Role> findByName(@PathVariable String name){
        return roleService.findByName(name);
    }

    @GetMapping("/delete/{id}")
    @PreAuthorize("hasAuthority('ROL_ELIMINAR')")
    public void deleteRole(@PathVariable Long id ) {
        roleService.deleteById(id);
    }
   
    @GetMapping("/findAll")
    @PreAuthorize("hasAuthority('ROL_LEER')")
    public List<Role> findAll(){
        return roleService.findAll();
    }

       /* @GetMapping()
    public RoleDTO findAlllPageable(
        @RequestParam(value="count", defaultValue = "20", required = false) long capacity,
        @RequestParam(value = "page", defaultValue = "0", required = true) long page
    ){
       
        return roleService.findAllPageable(capacity, page);
    }
    */
    
}

