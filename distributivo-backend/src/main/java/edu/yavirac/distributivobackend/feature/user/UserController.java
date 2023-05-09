package edu.yavirac.distributivobackend.feature.user;

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
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import edu.yavirac.distributivobackend.dto.ResponseApp;

@RestController
@CrossOrigin("*")
@RequestMapping("/api/user")
public class UserController {

    @Autowired
    UserService userService;

    @GetMapping()
    @PreAuthorize("hasAuthority('USUARIO_LEER')")
    public UserDTO findAlllPageable(
            @RequestParam(value = "count", defaultValue = "20", required = false) long capacity,
            @RequestParam(value = "page", defaultValue = "0", required = false) long page) {

        return userService.findAllPageable(capacity, page);
    }

    @PostMapping()
    @PreAuthorize("hasAuthority('USUARIO_CREAR')")
    public UserConsult save(@RequestBody User user) {
        return userService.save(user);
    }



    @PostMapping("/update")
    @PreAuthorize("hasAuthority('USUARIO_ACTUALIZAR')")
    public UserConsult update(@RequestBody User user) {
        return userService.save(user);
    }

   
    @GetMapping("/delete/role/{id}")
    @PreAuthorize("hasAuthority('USUARIO_CREAR')")
    public void deleteRole(@PathVariable Long id) {
        userService.deleteRole(id);
    }
    @GetMapping("/{id}")
    @PreAuthorize("hasAuthority('USUARIO_LEER')")
    public UserConsult findByName(@PathVariable Long id) {
        return userService.findById(id);
    }
    @GetMapping("/find/{name}")
    @PreAuthorize("hasAuthority('USUARIO_LEER')")
    public List<UserConsult> findByName(@PathVariable String name) {
        return userService.findByName(name);
    }

    @GetMapping("/delete/{id}")
    @PreAuthorize("hasAuthority('USUARIO_ELIMINAR')")
    public void deleteUser(@PathVariable Long id) {
        userService.deleteById(id);
    }

    @PostMapping(value = "/import-excel")
    @PreAuthorize("hasAuthority('USUARIO_CREAR')")
    public ResponseApp importExcelFile(@RequestParam("file") MultipartFile files) throws IOException {

        return userService.importExcel(files);
    }

    @GetMapping("/export-to-excel")
    @PreAuthorize("hasAuthority('USUARIO_CREAR')")
    public void exportIntoExcelFile(HttpServletResponse response) throws IOException {

        userService.generateExcelFile(response);
    }

}
