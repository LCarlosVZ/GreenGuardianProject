package com.greenguardian.greenguardianproject.repositories;

import com.greenguardian.greenguardianproject.models.Multa;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MultaRepository extends JpaRepository<Multa, Long> {

    Multa findByCedulaInfractor(String cedulaInfractor);
}
