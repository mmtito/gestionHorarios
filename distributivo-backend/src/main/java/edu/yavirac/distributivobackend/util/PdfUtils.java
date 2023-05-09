package edu.yavirac.distributivobackend.util;

import com.itextpdf.text.BaseColor;
import com.itextpdf.text.FontFactory;
import com.itextpdf.text.Phrase;
import com.itextpdf.text.pdf.PdfPCell;

public class PdfUtils {

    static public PdfPCell createCell(String content, float borderWidth, /* int colspan, */
            int alignment, float padding, BaseColor color) {
        PdfPCell cell = new PdfPCell(new Phrase(content));
        cell.setBorderWidth(borderWidth);
        cell.setPadding(padding);
        cell.setBackgroundColor(color);
        cell.setHorizontalAlignment(alignment);
        return cell;
    }

    static public PdfPCell createCell(String content, float borderWidth, int colspan,
            int alignment, float padding, BaseColor color) {
        PdfPCell cell = new PdfPCell(new Phrase(content));
        cell.setBorderWidth(borderWidth);
        cell.setColspan(colspan);
        cell.setPadding(padding);
        cell.setBackgroundColor(color);
        cell.setHorizontalAlignment(alignment);
        return cell;
    }

    static public PdfPCell createCell(String content, int alignment, float borderWidth,
            float padding, BaseColor color, int size) {
        PdfPCell cell = new PdfPCell(new Phrase(content, FontFactory.getFont(null, size)));
        cell.setBorderWidth(borderWidth);
        cell.setPadding(padding);
        cell.setBackgroundColor(color);
        cell.setHorizontalAlignment(alignment);
        return cell;
    }

}
