package edu.yavirac.distributivobackend.auth.security;


import org.springframework.security.web.AuthenticationEntryPoint;
import java.io.IOException;
import java.util.Date;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.fasterxml.jackson.databind.ObjectMapper;

import org.springframework.security.core.AuthenticationException;

public class JWTAuthenticationEntryPoint  implements AuthenticationEntryPoint{
    @Override
    public void commence(HttpServletRequest request, HttpServletResponse response, AuthenticationException authException) throws IOException, ServletException {
        response.setCharacterEncoding("UTF-8");
        response.setContentType("application/json; charset=utf-8");
        response.setStatus(HttpServletResponse.SC_FORBIDDEN);
        response.getWriter().write(new ObjectMapper().writeValueAsString( json(authException.getMessage())));
    }
    
    private String json(String message) {
        long date = new Date().getTime();
        
        return "{\"timestamp\": " + date + ", "
            + "\"status\": 401, "
            + "\"error\": \"Not authorized\", "
            + "\"message\": \"No access"+ message +"\" }";
    }
}

