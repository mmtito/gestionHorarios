package edu.yavirac.distributivobackend.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value = HttpStatus.BAD_REQUEST)
public class BadRequestException extends RuntimeException {
    
    private String require;
    private String resource;
    private String fieldName;

    public BadRequestException(String _require,String _resource,String _fieldName){

        super(String.format("El %s con el campo %s %s ", _resource, _fieldName,_require));

        this.resource = _resource;
        this.require = _require;
        this.fieldName = _fieldName;
       
    }

    public String getRequire() {
        return require;
    }

    public void setRequire(String require) {
        this.require = require;
    }

    public String getResource() {
        return resource;
    }

    public void setResource(String resource) {
        this.resource = resource;
    }

    public String getFieldName() {
        return fieldName;
    }

    public void setFieldName(String fieldName) {
        this.fieldName = fieldName;
    }
}
