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
        AnnuityCalculator calculator = AnnuityCalculator.builder()
                .interestRate(interestRate)
                .repaymentTime(repaymentTime)
                .monthlyPayment(monthlyPayment)
                .build();

        double creditInterest = interestRate / 1200;
        double numberOfMonth = repaymentTime * 12;
        double power = Math.pow((1 + creditInterest), numberOfMonth);
        double loanAmount =  monthlyPayment * ((1 / creditInterest) - (1 / (creditInterest * power)));

        calculator.setLoanAmount(loanAmount);
        calculatorRepo.saveAndFlush(calculator);

        return calculator.getLoanAmount();
    }

    public double getInterestRateByData(double loanAmount, double repaymentTime, double monthlyPayment) {
        double interestRate = 0.0;
        return interestRate;
    }

    public double getRepaymentTimeByData(double loanAmount, double interestRate, double monthlyPayment) {
        AnnuityCalculator calculator = AnnuityCalculator.builder()
                .loanAmount(loanAmount)
                .interestRate(interestRate)
                .monthlyPayment(monthlyPayment)
                .build();

        double creditInterest = interestRate / 1200;
        double numberOfMonth = Math.log10(monthlyPayment / (monthlyPayment - (loanAmount * creditInterest))) / (Math.log10(1 + creditInterest));
        double roundMonthes = Math.round(numberOfMonth);
        double repaymentTime = roundMonthes / 12;

        calculator.setRepaymentTime(repaymentTime);
        calculatorRepo.saveAndFlush(calculator);

        return calculator.getRepaymentTime();
    }

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

        calculator.setMonthlyPayment(monthlyPayment);
        calculatorRepo.saveAndFlush(calculator);

        return calculator.getMonthlyPayment();
    }

}
