package edu.yavirac.distributivobackend.feature.teacher_configuration;

import edu.yavirac.distributivobackend.dto.ResponseApp;
import edu.yavirac.distributivobackend.exception.ResourceNotFoundException;
import edu.yavirac.distributivobackend.feature.teacher.TeacherRepository;
import edu.yavirac.distributivobackend.util.ExcelGenerator;
import edu.yavirac.distributivobackend.util.ValidatorExcelCell;

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
public class TeacherConfigurationService {
    @Autowired
    TeacherConfigurationRepository TeacherConfigurationRepository;    
    @Autowired
    TeacherRepository teacherRepository;

    public Pagination findAllPageable(long capacity, long page) {
    

        long offset = page <= 0 ? 0 : page * capacity;

        Pagination dto = new Pagination();
        dto.setTeacherConfigurations(TeacherConfigurationRepository.findAllPageable(capacity, offset));
        dto.setTotal(TeacherConfigurationRepository.count());
        dto.setTotalPages(dto.getTotal() / capacity + 1);
        dto.setCapacity(capacity);
        dto.setPage(page);
        return dto;

    }

    public List<TeacherConfigurationDTO> findAll() {
        return TeacherConfigurationRepository.findAllConxult();
    }

    public TeacherConfiguration save(TeacherConfiguration TeacherConfiguration) {

        return TeacherConfigurationRepository.save(TeacherConfiguration);
    }

    public TeacherConfiguration findById(long id) {
        TeacherConfiguration TeacherConfiguration = TeacherConfigurationRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException(id, "id", "configuracion"));
        return TeacherConfiguration;
    }

    public Pagination findByTeacherId(long capacity,long page,long id) {

        teacherRepository.findById(id)
        .orElseThrow(() -> new ResourceNotFoundException(id, "id", "teacher"));

        long offset = page <= 0 ? 0 : page * capacity;

        Pagination dto = new Pagination();
        dto.setTeacherConfigurations(TeacherConfigurationRepository.findByTeacher(id, capacity, offset));
        dto.setTotal(TeacherConfigurationRepository.count());
        dto.setTotalPages(dto.getTotal() / capacity + 1);
        dto.setCapacity(capacity);
        dto.setPage(page);

        return dto;
 
    }

    public TeacherConfiguration update( TeacherConfiguration TeacherConfiguration) {

        TeacherConfigurationRepository.findById(TeacherConfiguration.getId())
                .orElseThrow(() -> new ResourceNotFoundException(TeacherConfiguration.getId(), "id", "configuracion"));

        return TeacherConfigurationRepository.save(TeacherConfiguration);
    }

    public ResponseApp deleteById(long id) {

        TeacherConfigurationRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException(id, "id", "ubicacion"));

        TeacherConfigurationRepository.deleteById(id);

        return new ResponseApp("la ubicacion se elimino correctamente", id);
    }

    public List<TeacherConfigurationDTO> findByName(String name) {
        return TeacherConfigurationRepository.findByNameLikeIgnoreCase(name + "%");
    }

    public void generateExcelFile(HttpServletResponse response) throws IOException {

        response.setContentType("application/octet-stream");
        String headerKey = "Content-Disposition";
        String headerValue = "attachment; filename=TeacherConfiguration.xlsx";
        response.setHeader(headerKey, headerValue);
        List<String> rows = Arrays.asList("DOCENTE", "DIA");
        ExcelGenerator excelGenerator = new ExcelGenerator();
        excelGenerator.generateExcelFile(response, rows);

    }

    public ResponseApp importExcel(MultipartFile files) throws IOException {
        StringBuilder errors = new StringBuilder();
        XSSFRow row;
        ValidatorExcelCell validator = new ValidatorExcelCell();
        TeacherConfiguration TeacherConfiguration;

        try (XSSFWorkbook workbook = new XSSFWorkbook(files.getInputStream())) {
            XSSFSheet worksheet = workbook.getSheetAt(0);
        

            for (int index = 1; index < worksheet.getPhysicalNumberOfRows(); index++) {
                TeacherConfiguration = new TeacherConfiguration();

                row = worksheet.getRow(index);

                if (validator.validate("id", row.getCell(0)))
                    TeacherConfiguration.setTeacher((Math.round(row.getCell(0).getNumericCellValue())));
                if (validator.validate("id", row.getCell(1)))
                    TeacherConfiguration.setDay((Math.round(row.getCell(1).getNumericCellValue())));
                if (validator.validate("id", row.getCell(2)))
                    TeacherConfiguration.setHour((Math.round(row.getCell(2).getNumericCellValue())));



                if (validator.hasErrors()) {
                    errors.append(validator.getErrors()).append("<br><br>");
                    validator.vacieErrors();
                } else 
                    try {

                        validator.vacieErrors();
                        TeacherConfigurationRepository.save(TeacherConfiguration);
                        errors
                        .append(String.format("configuracion fue guardada, linea %s del archivo",index + 1))
                        .append("<br>");
                    } catch (RuntimeException err) {
                        String detail = err.getMessage().split("Detail:")[1];
                        detail = detail.substring(0, detail.indexOf(';'));

                        errors.append(detail).append("<br>");
                        continue;
                    }
                

            }
        }catch(RuntimeException err){
            errors.append(err.getMessage()).append("<br>");
        }


        return new ResponseApp("proceso finalizado", errors);
    }

}