package com.codecool.creditcalculatorbackend.service;

import com.codecool.creditcalculatorbackend.model.AnnuityCalculator;
import com.codecool.creditcalculatorbackend.repository.AnnuityCalculatorRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.stream.Stream;

@Service
public class ResultService {

    @Autowired
    private AnnuityCalculatorRepo annuityCalculatorRepo;

    public AnnuityCalculator getLastId() {
        Stream<AnnuityCalculator> stream = annuityCalculatorRepo.findAll().stream();
        return stream.reduce((first, second) -> second).orElse(null);
    }

}
