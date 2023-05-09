package edu.yavirac.distributivobackend.exception;

import org.apache.http.HttpStatus;

public class DistributivoException extends RuntimeException {

    private HttpStatus status;
    private String message;

    public DistributivoException(String _message, HttpStatus _status) {

        this.message = _message;
        this.status = _status;

    }

    public HttpStatus getStatus() {
        return status;
    }

    public void setStatus(HttpStatus status) {
        this.status = status;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

}