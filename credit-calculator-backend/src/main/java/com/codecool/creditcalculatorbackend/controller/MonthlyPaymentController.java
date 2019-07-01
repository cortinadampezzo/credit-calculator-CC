package com.codecool.creditcalculatorbackend.controller;

import com.codecool.creditcalculatorbackend.model.AnnuityCalculator;
import com.codecool.creditcalculatorbackend.service.MonthlyPaymentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class MonthlyPaymentController {

    @Autowired
    private MonthlyPaymentService monthlyPaymentService;

    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping("/monthly-payment")
    public double getMonthlyPaymentByData(@RequestBody AnnuityCalculator calculator) {
        return monthlyPaymentService.getMonthlyPaymentByData(calculator.getLoanAmount(),
                calculator.getInterestRate(), calculator.getRepaymentTime());

    }
}
