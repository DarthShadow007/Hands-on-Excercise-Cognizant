package com.cognizant.springlearn.service;

import com.cognizant.springlearn.Country;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationContext;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CountryService {

    @Autowired
    private ApplicationContext context;

    public Country getCountry(String code) {
        // Retrieve the list bean from country.xml
        @SuppressWarnings("unchecked")
        List<Country> countryList = (List<Country>) context.getBean("countryList");

        // Case-insensitive matching using lambda expression
        return countryList.stream()
                .filter(c -> c.getCode().equalsIgnoreCase(code))
                .findFirst()
                .orElse(null);
    }
}