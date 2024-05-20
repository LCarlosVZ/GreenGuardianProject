package com.greenguardian.greenguardianproject.repositories;

import com.greenguardian.greenguardianproject.models.Policia;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PoliciaRepository extends JpaRepository<Policia, Long> {

    Policia findByPlacaPolicia(String placaPolicia);
}

