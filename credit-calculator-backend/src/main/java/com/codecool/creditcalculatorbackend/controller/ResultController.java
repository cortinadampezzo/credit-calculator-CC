package com.codecool.creditcalculatorbackend.controller;

import com.codecool.creditcalculatorbackend.model.AnnuityCalculator;
import com.codecool.creditcalculatorbackend.service.ResultService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ResultController {

    @Autowired
    private ResultService resultService;

    @CrossOrigin(origins = "http://localhost:3000")
    @PutMapping("/result")
    public AnnuityCalculator getLastItem() {
        return resultService.getLastId();
    }

}
