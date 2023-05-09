package edu.yavirac.distributivobackend.feature.location;

import edu.yavirac.distributivobackend.dto.ResponseApp;
import edu.yavirac.distributivobackend.exception.ResourceNotFoundException;
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
public class LocationService {
    @Autowired
    LocationRepository locationRepository;

    public LocationDTO findAllPageable(long capacity, long page) {

        long offset = page <= 0 ? 0 : page * capacity;

        LocationDTO dto = new LocationDTO();
        dto.setLocations(locationRepository.findAllPageable(capacity, offset));
        dto.setTotal(locationRepository.count());
        dto.setTotalPages(dto.getTotal() / capacity + 1);
        dto.setCapacity(capacity);
        dto.setPage(page);
        return dto;

    }

    public List<Location> findAll() {
        return locationRepository.findAll();
    }

    public Location save(Location Location) {

        return locationRepository.save(Location);
    }

    public Location findById(long id) {
        Location location = locationRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException(id, "id", "ubicacion"));
        return location;
    }

    public Location update(Long id, Location location) {

        locationRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException(id, "id", "ubicacion"));

        return locationRepository.save(location);
    }

    public ResponseApp deleteById(long id) {

        locationRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException(id, "id", "ubicacion"));

        locationRepository.deleteLocation(id);

        return new ResponseApp("la ubicacion se elimino correctamente", id);
    }

    public List<Location> findByName(String name) {
        return locationRepository.findByNameLikeIgnoreCase(name + "%");
    }

    public void generateExcelFile(HttpServletResponse response) throws IOException {

        response.setContentType("application/octet-stream");
        String headerKey = "Content-Disposition";
        String headerValue = "attachment; filename=location.xlsx";
        response.setHeader(headerKey, headerValue);
        List<String> rows = Arrays.asList("NAME", "DESCRIPTION", "LATITUD", "LONGITUD");
        ExcelGenerator excelGenerator = new ExcelGenerator();
        excelGenerator.generateExcelFile(response, rows);

    }

    public ResponseApp importExcel(MultipartFile files) throws IOException {
        StringBuilder errors = new StringBuilder();
        XSSFRow row;
        ValidatorExcelCell validator = new ValidatorExcelCell();
        Location location;

        try (XSSFWorkbook workbook = new XSSFWorkbook(files.getInputStream())) {
            XSSFSheet worksheet = workbook.getSheetAt(0);

            for (int index = 1; index < worksheet.getPhysicalNumberOfRows(); index++) {
                location = new Location();

                row = worksheet.getRow(index);

                if (validator.validate("string", row.getCell(0)))
                    location.setName(row.getCell(0).getStringCellValue());
                if (validator.validate("string", row.getCell(1)))
                    location.setDescription(row.getCell(1).getStringCellValue());
                if (validator.validate("number", row.getCell(2)))
                    location.setLatitude(Math.round(row.getCell(2).getNumericCellValue()));
                if (validator.validate("number", row.getCell(3)))
                    location.setLongitude(Math.round(row.getCell(3).getNumericCellValue()));

                if (validator.hasErrors()) {
                    errors.append(validator.getErrors()).append("<br><br>");
                    validator.vacieErrors();
                } else
                    try {

                        validator.vacieErrors();
                        locationRepository.save(location);
                        errors
                                .append(String.format("Ubicacion %s fue guardada, linea %s del archivo",
                                        location.getName(), index + 1))
                                .append("<br>");
                    } catch (RuntimeException err) {
                        String detail = err.getMessage().split("Detail:")[1];
                        detail = detail.substring(0, detail.indexOf(';'));

                        errors.append(detail).append("<br>");
                        continue;
                    }

            }
        } catch (RuntimeException err) {
            errors.append(err.getMessage()).append("<br>");
        }

        return new ResponseApp("proceso finalizado", errors);
    }

}