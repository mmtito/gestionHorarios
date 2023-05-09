package edu.yavirac.distributivobackend.feature.schedule;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.ByteArrayResource;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.itextpdf.text.*;
import com.itextpdf.text.pdf.PdfPTable;
import com.itextpdf.text.pdf.PdfWriter;

import edu.yavirac.distributivobackend.util.ColorUtils;
import edu.yavirac.distributivobackend.util.DocumentStyles;
import edu.yavirac.distributivobackend.util.PdfUtils;
import edu.yavirac.distributivobackend.util.ScheduleUtils;
import edu.yavirac.distributivobackend.util.StringUtils;

import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.Optional;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;

@Service
public class ReportScheduleService {

        @Autowired
        private ScheduleService scheduleService;

        static String[] tableFields = new String[] 
        { "Hora", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes","Sabado", "Domingo" };

        public ResponseEntity<ByteArrayResource> generateReport(ScheduleOptionsConsultDto options)
                        throws IOException, DocumentException {
                

                ScheduleUtils scheduleUtils = new ScheduleUtils();
                scheduleUtils.generateStartToEnd(options.getFrom(), options.getTo());

                Document scheduleReport = new Document();
                scheduleReport.setPageSize(DocumentStyles.SizeRectangle1000x600);
                scheduleReport.setMargins(0, 0, 10f, 0);
                String fileName =String.format("%s.pdf",StringUtils.generateUniqueString());
                PdfWriter.getInstance(scheduleReport, new FileOutputStream(fileName));

                scheduleReport.open();
                Schedule schedule;
                for (String[] dates : scheduleUtils.getArray()) {
                        options.setFrom(dates[0]);
                        options.setTo(dates[1]);

                        PdfPTable table = new PdfPTable(8);
                        table.setWidthPercentage(98f);
                        table.setWidths(new float[] { 90f, 190f, 190f, 190f, 190f, 180f, 90f, 90f });
                        table.addCell(PdfUtils.createCell(String.format("%s a %s ", dates[0], dates[1]), 1, 8,
                                        Element.ALIGN_CENTER, 7f, null));
                        schedule = this.scheduleService.findEventsSchedule(options);
                        
                        for (String field : tableFields)
                                table
                                .addCell(PdfUtils.createCell(field, 1, Element.ALIGN_CENTER, 7f, BaseColor.GRAY));
                        


                        table.addCell(PdfUtils.createCell("", 1, 0, 0, BaseColor.GRAY));
                        for (String field : schedule.getToFrom())
                           table
                           .addCell(PdfUtils.createCell(field, 1, Element.ALIGN_CENTER, 7f, BaseColor.GRAY));
                        
  
                        for(Hour hour : schedule.getHours()){
                                table
                                .addCell(PdfUtils.createCell(hour.getPosition(), 1, 0, 7f, BaseColor.WHITE));

                                for(String date : schedule.getToFrom()){

                                        Optional<Event> event = hour.getEvents()
                                        .stream().filter((value)->value.getDay().equalsIgnoreCase(date)).findAny();

                                        if(event.isPresent()){
                                        
                                            String abouttClass = String
                                            .format("%s ", event.get().getSubject()/* , event.get().getTeacher().getName(), event.get().getClassroom()*/); 

                                            table.addCell(PdfUtils.createCell(abouttClass, 1, 
                                            Element.ALIGN_CENTER, 7f, ColorUtils.getBaseColor(event.get().getTeacher().getColor()),11));
                                        }
                                        else
                                          table.addCell(PdfUtils
                                          .createCell("", 1, 0, 7f, BaseColor.WHITE));
                                            
                                }


                        }

                        scheduleReport.add(table);
                        scheduleReport.newPage();

                }

                scheduleReport.close();

                File file = new File(fileName);

                Path path = Paths.get(file.getAbsolutePath());

                ByteArrayResource resource = new ByteArrayResource(Files.readAllBytes(path));

                long contentLenght = file.length();

                file.delete();

                return ResponseEntity.ok()
                .contentType(MediaType.APPLICATION_PDF)
                .contentLength(contentLenght)
                .header("Content-Disposition", String.format("attachment;filename=%s", fileName))
                .body(resource);
        }

      
     

}
