package edu.yavirac.distributivobackend.config;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

@Component
public class Conexion {

    @Value("${spring.datasource.url}")
    private String url;
    @Value("${spring.datasource.username}")
    private String user;
    @Value("${spring.datasource.password}")
    private String password;

    public Connection getConnetion() throws SQLException{

        Connection con = DriverManager.getConnection(url, user, password); 
        return con;
    }
   
}