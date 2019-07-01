package com.codecool.creditcalculatorbackend.controller;

import com.codecool.creditcalculatorbackend.model.AnnuityCalculator;
import com.codecool.creditcalculatorbackend.service.RepaymentTimeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class RepaymentTimeController {

    @Autowired
    private RepaymentTimeService repaymentTimeService;

    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping("/repayment-time")
    public double getRepaymentTime(@RequestBody AnnuityCalculator calculator) {
        return repaymentTimeService.getRepaymentTimeByData(calculator.getLoanAmount(),
                calculator.getInterestRate(), calculator.getMonthlyPayment());
    }

}
