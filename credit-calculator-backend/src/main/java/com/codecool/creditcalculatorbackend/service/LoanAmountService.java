package com.codecool.creditcalculatorbackend.service;

import com.codecool.creditcalculatorbackend.model.AnnuityCalculator;
import com.codecool.creditcalculatorbackend.repository.AnnuityCalculatorRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class LoanAmountService {

    @Autowired
    private AnnuityCalculatorRepo annuityCalculatorRepo;

    public double getLoanAmountByData(double interestRate, double repaymentTime, double monthlyPayment) {
        AnnuityCalculator calculator = AnnuityCalculator.builder()
                .interestRate(interestRate)
                .repaymentTime(repaymentTime)
                .monthlyPayment(monthlyPayment)
                .build();

        double creditInterest = interestRate / 1200;
        double numberOfMonth = repaymentTime * 12;
        double power = Math.pow((1 + creditInterest), numberOfMonth);
        double loanAmount = monthlyPayment * ((1 / creditInterest) - (1 / (creditInterest * power)));
        loanAmount = Math.round(loanAmount);

        calculator.setLoanAmount(loanAmount);
        annuityCalculatorRepo.saveAndFlush(calculator);

        return calculator.getLoanAmount();
    }

}
