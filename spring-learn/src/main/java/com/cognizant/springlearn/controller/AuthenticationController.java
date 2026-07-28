package com.cognizant.springlearn.controller;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.security.Keys;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RestController;

import java.nio.charset.StandardCharsets;
import java.security.Key;
import java.util.Base64;
import java.util.HashMap;
import java.util.Map;

@RestController
public class AuthenticationController {

    private static final Logger LOGGER = LoggerFactory.getLogger(AuthenticationController.class);
    
    // Secure Key for JWT Signing
    private final Key key = Keys.secretKeyFor(SignatureAlgorithm.HS256);

    @GetMapping("/authenticate")
    public Map<String, String> authenticate(@RequestHeader("Authorization") String authHeader) {
        LOGGER.info("START: authenticate()");
        
        // 1. Read Authorization header and decode (e.g. "Basic dXNlcjpwd2Q=")
        String base64Credentials = authHeader.substring("Basic".length()).trim();
        byte[] credDecoded = Base64.getDecoder().decode(base64Credentials);
        String credentials = new String(credDecoded, StandardCharsets.UTF_8);
        
        // Credentials will look like "user:pwd"
        final String[] values = credentials.split(":", 2);
        String username = values[0];
        
        // 2. Generate token based on user retrieved
        String token = Jwts.builder()
                .setSubject(username)
                .signWith(key)
                .compact();

        // 3. Return JSON response {"token": "ey..."}
        Map<String, String> response = new HashMap<>();
        response.put("token", token);
        
        LOGGER.info("END: authenticate()");
        return response;
    }
}