package edu.yavirac.distributivobackend.feature.classroom;

import edu.yavirac.distributivobackend.util.ExcelGenerator;
import edu.yavirac.distributivobackend.util.ValidatorExcelCell;
import edu.yavirac.distributivobackend.dto.ResponseApp;
import edu.yavirac.distributivobackend.exception.BadRequestException;
import edu.yavirac.distributivobackend.exception.ResourceNotFoundException;
import edu.yavirac.distributivobackend.feature.location.LocationRepository;

import java.io.IOException;
import java.util.Arrays;
import java.util.List;

import javax.servlet.http.HttpServletResponse;

import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.apache.poi.xssf.usermodel.XSSFSheet;
import org.apache.poi.xssf.usermodel.XSSFRow;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

@Service
public class ClassRoomService {
    @Autowired
    ClassRoomRepository classroomRepository;
    @Autowired
    LocationRepository locationRepository;

    // Crud

    public ClassroomDTO findAllConsult(long capacity, long page) {

        long offset = page <= 0 ? 0 : page * capacity;

        ClassroomDTO dto = new ClassroomDTO();
        dto.setClassrooms(classroomRepository.findAllConsult(capacity, offset));
        dto.setTotal(classroomRepository.count());
        dto.setTotalPages(dto.getTotal() / capacity + 1);
        dto.setCapacity(capacity);
        dto.setPage(page);

        return dto;

    }

    public List<Classroom> findAll() {
        return classroomRepository.finAll();
    }

    public Classroom save(Classroom classroom) {

        return this.executeSave(classroom);

    }

    public Classroom findById(long id) {
        Classroom classroom = classroomRepository.findById(id)
                .orElseThrow(() -> (new ResourceNotFoundException(id, "id", "aula")));

        return classroom;

    }

    public Classroom update(Classroom classroom) {

        if (classroom.getLocation() == null) {
            throw new BadRequestException("no debe estar vacio", "aula", "ubicacion");
        }

        locationRepository.findById(classroom.getLocation())
                .orElseThrow(() -> new ResourceNotFoundException(classroom.getLocation(), "id", "ubicacion"));

        classroomRepository.findById(classroom.getId())
                .orElseThrow(() -> new ResourceNotFoundException(classroom.getId(), "id", "aula"));

        return this.executeUpdate(classroom);
    }

    public ResponseApp deleteById(long id) {

        classroomRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException(id, "id", "aula"));
        classroomRepository.deleteclassroom(id);

        return new ResponseApp("aula eliminada", null);

    }

    public List<Classroom> findByName(String name) {
        return classroomRepository.findByNameLikeIgnoreCase(name + "%");
    }

    // Excel

    public void generateExcelFile(HttpServletResponse response) throws IOException {

        response.setContentType("application/octet-stream");
        String headerKey = "Content-Disposition";
        String headerValue = "attachment; filename=classroom.xlsx";
        response.setHeader(headerKey, headerValue);
        List<String> rows = Arrays.asList("NAME", "DESCRIPCION", "UBICACION", "CAPACIDAD"/*, "TIPO"*/);
        ExcelGenerator excelGenerator = new ExcelGenerator();
        excelGenerator.generateExcelFile(response, rows);

    }

    public ResponseApp importExcel(MultipartFile files) throws IOException {
        StringBuilder errors = new StringBuilder();
        XSSFRow row;
        Classroom classroom;
        ValidatorExcelCell validator = new ValidatorExcelCell();

       try (XSSFWorkbook workbook = new XSSFWorkbook(files.getInputStream())) {
      

            XSSFSheet worksheet = workbook.getSheetAt(0);
           

            for (int index = 1; index < worksheet.getPhysicalNumberOfRows(); index++) {
                classroom = new Classroom();

                row = worksheet.getRow(index);
            

                if (validator.validate("string", row.getCell(0)))
                    classroom.setName(row.getCell(0).getStringCellValue());
                if (validator.validate("string", row.getCell(1)))
                    classroom.setDescription(row.getCell(1).getStringCellValue());
                if (validator.validate("id", row.getCell(2)))
                    classroom.setLocation(Math.round(row.getCell(2).getNumericCellValue()));
                if (validator.validate("number", row.getCell(3)))
                    classroom.setCapacity(Math.round(row.getCell(3).getNumericCellValue()));
                /*if (validator.validate("id", row.getCell(4)))
                    classroom.setType(Math.round(row.getCell(4).getNumericCellValue()));

*/

                if (validator.hasErrors()) {
                    errors.append(validator.getErrors()).append("<br><br>");
                    System.out.println(validator);
                    validator.vacieErrors();
                } else {
                    try {

                        validator.vacieErrors();
                        this.executeSave(classroom);

                        errors
                        .append(String.format("aula %s fue guardada, linea %s del archivo",
                                classroom.getName(), index + 1))
                        .append("<br>");

                    } catch (RuntimeException err) {
                 
                        String detail = err.getMessage().split("Detail:")[1];
                        detail = detail.substring(0, detail.indexOf(';'));

                        errors.append(detail).append("<br>");
                        continue;
                    }
                }
                
            }
        }catch(RuntimeException err){
       
            errors.append(err.getMessage()).append("<br>"); 

        }
        return new ResponseApp("se exporto correctamente", errors);
    }

    // Private methods

    private Classroom executeSave(Classroom c) {
        return classroomRepository.findById(
                classroomRepository.mySave(
                        c.getName(), true, c.getCapacity(),
                        c.getType(), c.getLocation(), c.getDescription()))
                .get();

    }

    private Classroom executeUpdate(Classroom c) {
        return classroomRepository.findById(
                classroomRepository.update(
                        c.getId(), c.getName(), c.getCapacity(),
                        c.getType(), c.getLocation(), c.getDescription()))
                .get();
    }
}