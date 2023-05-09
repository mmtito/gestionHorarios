package edu.yavirac.distributivobackend.feature.grade;

import edu.yavirac.distributivobackend.dto.ResponseApp;
import edu.yavirac.distributivobackend.exception.DistributivoException;
import edu.yavirac.distributivobackend.exception.ResourceNotFoundException;
import edu.yavirac.distributivobackend.util.ExcelGenerator;
import edu.yavirac.distributivobackend.util.ValidatorExcelCell;

import java.io.IOException;
import java.util.ArrayList;
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
public class GradeService {
    @Autowired
    GradeRepository gradeRepository;

    // services

    public GradeDTO findAllConsult(long capacity, long page) {

        long offset = page <= 0 ? 0 : page * capacity;
        GradeDTO dto = new GradeDTO();
        dto.setGrades(gradeRepository.findAll(capacity, offset));
        dto.setTotal(gradeRepository.count());
        dto.setTotalPages(dto.getTotal() / capacity + 1);
        dto.setCapacity(capacity);
        dto.setPage(page);
        return dto;

    }

    public List<GradeForCareer> findAllByCareer() {

        List<Grade> grades = gradeRepository.getAll();

        return separarteByCareer(grades);

    }
    
    public List<GradeSelect> findNameSelect(String value){
    	
    	return gradeRepository.findNameSelect(value);
    	
    }

    public List<Grade> findAll() {
        return gradeRepository.getAll();
    }

    public Grade save(Grade grade) {

        return this.executeSave(grade);

    }

    public Grade findById(long id) {

        Grade grade = gradeRepository.findById(id)
                .orElseThrow(() -> new DistributivoException("Error al guardar el curso", null));

        return grade;

    }

    public Grade update(Grade grade) {

        gradeRepository.findById(grade.getId())
                .orElseThrow(() -> new ResourceNotFoundException(grade.getId(), "id", "curso"));

        return this.executeUpdate(grade);
    }

    public ResponseApp deleteById(long id) {

        gradeRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException(id, "id", "grade"));
        gradeRepository.deleteGrade(id);
        return new ResponseApp("curso eliminado correctamente", null);

    }

    public List<GradeForCareer> findByNameForCareer(String name) {
        return separarteByCareer(gradeRepository.findByNameLikeIgnoreCase(name + "%"));
    }

    public void generateExcelFile(HttpServletResponse response) throws IOException {

        response.setContentType("application/octet-stream");
        String headerKey = "Content-Disposition";
        String headerValue = "attachment; filename=grade.xlsx";
        response.setHeader(headerKey, headerValue);
        List<String> rows = Arrays.asList("NAME", "CARRERA", "NIVEL", "PARALELO", "JORNADA");
        ExcelGenerator excelGenerator = new ExcelGenerator();
        excelGenerator.generateExcelFile(response, rows);
    }

    public ResponseApp importExcel(MultipartFile files) throws IOException {
        Grade grade;
        XSSFRow row;
        ValidatorExcelCell validador = new ValidatorExcelCell();
        StringBuilder errors = new StringBuilder();

        try (XSSFWorkbook workbook = new XSSFWorkbook(files.getInputStream())) {
            XSSFSheet worksheet = workbook.getSheetAt(0);

            for (int index = 1; index < worksheet.getPhysicalNumberOfRows(); index++) {
                grade = new Grade();

                row = worksheet.getRow(index);

                if (validador.validate("string", row.getCell(0)))
                    grade.setName(row.getCell(0).getStringCellValue());
                if (validador.validate("id", row.getCell(1)))
                    grade.setCareer(Math.round(row.getCell(1).getNumericCellValue()));
                if (validador.validate("id", row.getCell(2)))
                    grade.setLevel(Math.round(row.getCell(2).getNumericCellValue()));
                if (validador.validate("id", row.getCell(3)))
                    grade.setParallel(Math.round(row.getCell(3).getNumericCellValue()));
                if (validador.validate("id", row.getCell(4)))
                    grade.setWorkingDay(Math.round(row.getCell(4).getNumericCellValue()));

                if (validador.hasErrors()) {
                    errors.append(validador.getErrors()).append("<br><br>");
                    validador.vacieErrors();

                } else {
                    try {
                        validador.vacieErrors();
                        this.executeSave(grade);
                        errors
                        .append(String.format("Curso %s fue guardada, linea %s del archivo",
                                grade.getName(), index + 1))
                        .append("<br>");

                    } catch (RuntimeException err) {
                        String detail = err.getMessage().split("Detail:")[1];
                        detail = detail.substring(0, detail.indexOf(';'));

                        errors.append(detail).append("<br>");
                        continue;

                    }

                }

            }
        }
        return new ResponseApp("tarea terminada", errors);
    }

    public List<Career> getCareers() {
        return gradeRepository.getCareers();
    }

    // functions to services

    private List<GradeForCareer> separarteByCareer(List<Grade> grades) {
        List<GradeForCareer> gradesForCareer = new ArrayList<GradeForCareer>();
        List<Career> careers = gradeRepository.getCareers();

        for (Career career : careers) {
            GradeForCareer gradeForCareer = new GradeForCareer();

            gradeForCareer.setName(career.getName());

            List<Grade> gradesByCareer = new ArrayList<Grade>();

            grades.stream().filter(g -> g.getCareer() == career.getId()).forEach(g -> gradesByCareer.add(g));

            gradeForCareer.setGrades(gradesByCareer);
            if (gradeForCareer.getGrades().size() == 0)
                continue;
            gradesForCareer.add(gradeForCareer);

        }

        return gradesForCareer;

    }

    private Grade executeSave(Grade g) {
        return gradeRepository.findById(
                gradeRepository.mySave(g.getName(), g.getWorkingDay(), g.getLevel(), g.getParallel(), g.getCareer()))
                .get();

    }

    private Grade executeUpdate(Grade g) {
        return gradeRepository.findById(
                gradeRepository.update(
                        g.getId(), g.getName(), g.getWorkingDay(), g.getLevel(), g.getParallel(), g.getCareer()))
                .get();

    }

}
