package com.cognizant.springlearn.controller;

import com.cognizant.springlearn.Country;
import com.cognizant.springlearn.service.CountryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationContext;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class CountryController {

    @Autowired
    private ApplicationContext context;

    @Autowired
    private CountryService countryService;

    // Hand-on: REST - Country Web Service (Returns India bean from XML)
    @RequestMapping("/country")
    public Country getCountryIndia() {
        return context.getBean("country", Country.class);
    }

    // Hands-on: REST - Get country based on country code
    @GetMapping("/countries/{code}")
    public Country getCountry(@PathVariable String code) {
        return countryService.getCountry(code);
    }
}