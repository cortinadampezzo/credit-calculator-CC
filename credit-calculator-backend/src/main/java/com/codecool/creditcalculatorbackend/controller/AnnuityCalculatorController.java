package com.codecool.creditcalculatorbackend.controller;

import com.codecool.creditcalculatorbackend.modal.AnnuityCalculator;
import com.codecool.creditcalculatorbackend.repository.AnnuityCalculatorRepo;
import com.codecool.creditcalculatorbackend.service.AnnuityCalculatorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AnnuityCalculatorController {

    @Autowired
    AnnuityCalculatorRepo annuityCalculatorRepo;

    @Autowired
    AnnuityCalculatorService annuityCalculatorService;

    @GetMapping("/monthly-payment")
    public double getMonthlyPaymentByData(@RequestBody AnnuityCalculator calculator) {
        double monthlyPayment = annuityCalculatorService.getMonthlyPaymentByData(calculator.getLoanAmount(),
                calculator.getInterestRate(), calculator.getRepaymentTime());
        System.out.println("1 request for /monthly-payment ");
        return monthlyPayment;

    }

}
