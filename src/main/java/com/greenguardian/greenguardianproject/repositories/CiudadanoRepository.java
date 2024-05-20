package com.greenguardian.greenguardianproject.repositories;

import com.greenguardian.greenguardianproject.models.Ciudadano;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CiudadanoRepository extends JpaRepository<Ciudadano, Long> {
    // Puedes agregar métodos personalizados de consulta si los necesitas

    Ciudadano findByCedulaInfractor(String cedulaInfractor);
}
