package com.codecool.creditcalculatorbackend.controller;

import com.codecool.creditcalculatorbackend.model.AnnuityCalculator;
import com.codecool.creditcalculatorbackend.service.LoanAmountService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class LoanAmountController {

    @Autowired
    private LoanAmountService loanAmountService;

    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping("/loan-amount")
    public double getLoanAmountByData(@RequestBody AnnuityCalculator calculator) {
        return loanAmountService.getLoanAmountByData(calculator.getInterestRate(),
                calculator.getRepaymentTime(), calculator.getMonthlyPayment());
    }

}
