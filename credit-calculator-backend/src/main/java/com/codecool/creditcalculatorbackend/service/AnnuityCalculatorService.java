package com.codecool.creditcalculatorbackend.service;

import com.codecool.creditcalculatorbackend.modal.AnnuityCalculator;
import com.codecool.creditcalculatorbackend.repository.AnnuityCalculatorRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AnnuityCalculatorService {

    @Autowired
    private AnnuityCalculatorRepo calculatorRepo;

    public double getLoanAmountByData(double interestRate, double repaymentTime, double monthlyPayment) {
        double loanAmount = 0.0;
        return loanAmount;
    }

    public double getInterestRateByData(double loanAmount, double repaymentTime, double monthlyPayment) {
        double interestRate = 0.0;
        return interestRate;
    }

    public double getRepaymentTimeByData(double loanAmount, double interestRate, double monthlyPayment) {
        double repaymentTime = 0.0;
        return repaymentTime;
    }

    public double getMonthlyPaymentByData(double loanAmount, double interestRate, double repaymentTime) {
        AnnuityCalculator calculator = AnnuityCalculator.builder()
                .loanAmount(loanAmount)
                .interestRate(interestRate)
                .repaymentTime(repaymentTime)
                .build();

        double creditInterest = interestRate / 100;
        double power = Math.pow((1 + creditInterest), repaymentTime);
        double yearlyPayment = loanAmount / ((1 - (1 / power)) / creditInterest);
        double monthlyPayment = yearlyPayment / 12;

        calculator.setMonthlyPayment(monthlyPayment);
        calculatorRepo.saveAndFlush(calculator);

        return calculator.getMonthlyPayment();
    }

}
