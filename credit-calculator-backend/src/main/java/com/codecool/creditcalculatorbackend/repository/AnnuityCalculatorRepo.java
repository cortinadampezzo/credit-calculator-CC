package com.codecool.creditcalculatorbackend.repository;

import com.codecool.creditcalculatorbackend.modal.AnnuityCalculator;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AnnuityCalculatorRepo extends JpaRepository<AnnuityCalculator, Long> {
}
