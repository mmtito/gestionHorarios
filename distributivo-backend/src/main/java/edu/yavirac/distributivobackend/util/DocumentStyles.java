package edu.yavirac.distributivobackend.util;

import com.itextpdf.text.*;

public class DocumentStyles {

    public static Font titleFont = FontFactory.getFont(FontFactory.COURIER, 16f, BaseColor.BLACK);
    public static Rectangle SizeRectangle1000x600 = new Rectangle(1000, 600); 
    


    
    public static Document getDocumentSchedule() {
        Document documentReportSchedule = new Document();
        documentReportSchedule.setPageSize(SizeRectangle1000x600);
        documentReportSchedule.setMargins(0, 0, 10f, 0);

        return getDocumentSchedule();
    }
    

}
