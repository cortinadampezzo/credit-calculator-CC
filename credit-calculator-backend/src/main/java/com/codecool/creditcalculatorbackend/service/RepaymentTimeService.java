package com.codecool.creditcalculatorbackend.service;

import com.codecool.creditcalculatorbackend.model.AnnuityCalculator;
import com.codecool.creditcalculatorbackend.repository.AnnuityCalculatorRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class RepaymentTimeService {

    @Autowired
    private AnnuityCalculatorRepo annuityCalculatorRepo;

    public double getRepaymentTimeByData(double loanAmount, double interestRate, double monthlyPayment) {
        AnnuityCalculator calculator = AnnuityCalculator.builder()
                .loanAmount(loanAmount)
                .interestRate(interestRate)
                .monthlyPayment(monthlyPayment)
                .build();

        double creditInterest = interestRate / 1200;
        double numberOfMonth = Math.log10(monthlyPayment /
                (monthlyPayment - (loanAmount * creditInterest))) / (Math.log10(1 + creditInterest));
        double repaymentTime = numberOfMonth / 12;
        repaymentTime = Math.round(repaymentTime * 100.0) / 100.0;


        calculator.setRepaymentTime(repaymentTime);
        annuityCalculatorRepo.saveAndFlush(calculator);

        return calculator.getRepaymentTime();
    }

}
