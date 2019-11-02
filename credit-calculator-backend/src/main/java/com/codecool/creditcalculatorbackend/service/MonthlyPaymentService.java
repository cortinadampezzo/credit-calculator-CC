package com.codecool.creditcalculatorbackend.service;

import com.codecool.creditcalculatorbackend.model.AnnuityCalculator;
import com.codecool.creditcalculatorbackend.repository.AnnuityCalculatorRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class MonthlyPaymentService {

    @Autowired
    private AnnuityCalculatorRepo annuityCalculatorRepo;

    public double getMonthlyPaymentByData(double loanAmount, double interestRate, double repaymentTime) {
        AnnuityCalculator calculator = AnnuityCalculator.builder()
                .loanAmount(loanAmount)
                .interestRate(interestRate)
                .repaymentTime(repaymentTime)
                .build();

        double creditInterest = interestRate / 1200;
        double numberOfMonth = repaymentTime * 12;
        double power = Math.pow((1 + creditInterest), numberOfMonth);
        double monthlyPayment = loanAmount / ((1 / creditInterest) - (1 / (creditInterest * power)));

        monthlyPayment = Math.round(monthlyPayment);

        calculator.setMonthlyPayment(monthlyPayment);
        annuityCalculatorRepo.saveAndFlush(calculator);

        return calculator.getMonthlyPayment();
    }
}
