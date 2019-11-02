package com.codecool.creditcalculatorbackend.repository;

import com.codecool.creditcalculatorbackend.model.AnnuityCalculator;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AnnuityCalculatorRepo extends JpaRepository<AnnuityCalculator, Long> {
}
