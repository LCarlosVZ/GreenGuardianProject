package com.greenguardian.greenguardianproject.repositories;

import com.greenguardian.greenguardianproject.models.Delito;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DelitoRepository extends JpaRepository<Delito, Long> {

    Delito findByCedulaInfractor(String cedulaInfractor);
}
