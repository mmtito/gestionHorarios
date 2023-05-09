package edu.yavirac.distributivobackend.exception;

import java.lang.RuntimeException;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.http.HttpStatus;

@ResponseStatus(value=HttpStatus.NOT_FOUND)
public class ResourceNotFoundException extends RuntimeException{

    private String resourceName;
    private String fieldName;
    private Long fieldValue;

    public ResourceNotFoundException(Long id,String fieldName,String resourceName){
        super(String.format("%s no encontrada con %s %s", resourceName,fieldName,id));
        this.fieldName = fieldName;
        this.resourceName = resourceName;
        this.fieldValue = id;
    }

    public String getResourceName() {
        return resourceName;
    }

    public void setResourceName(String resourceName) {
        this.resourceName = resourceName;
    }

    public String getFieldName() {
        return fieldName;
    }

    public void setFieldName(String fieldName) {
        this.fieldName = fieldName;
    }

    public Long getFieldValue() {
        return fieldValue;
    }

    public void setFieldValue(Long fieldValue) {
        this.fieldValue = fieldValue;
    }
}