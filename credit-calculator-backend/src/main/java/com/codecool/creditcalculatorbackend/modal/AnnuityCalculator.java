package com.codecool.creditcalculatorbackend.modal;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Data
@Builder
public class AnnuityCalculator {

    @Id
    @GeneratedValue
    private long id;

    @Column
    private double loanAmount;

    @Column
    private double interestRate;

    private double repaymentTime;
    private double monthlyPayment;

}
