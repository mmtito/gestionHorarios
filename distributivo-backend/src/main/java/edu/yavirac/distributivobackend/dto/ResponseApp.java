package edu.yavirac.distributivobackend.dto;

import lombok.Data;

@Data
public class ResponseApp {
    
    private String message;
    private Object data;

    public ResponseApp(String _message, Object _data){

        this.data = _data;
        this.message = _message;

    }

}
