package com.greenguardian.greenguardianproject.service;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.greenguardian.greenguardianproject.dto.Factura;
import com.greenguardian.greenguardianproject.models.Ciudadano;
import com.greenguardian.greenguardianproject.models.Delito;
import com.greenguardian.greenguardianproject.models.Multa;
import com.greenguardian.greenguardianproject.models.Policia;
import com.greenguardian.greenguardianproject.repositories.CiudadanoRepository;
import com.greenguardian.greenguardianproject.repositories.DelitoRepository;
import com.greenguardian.greenguardianproject.repositories.MultaRepository;
import com.greenguardian.greenguardianproject.repositories.PoliciaRepository;

@Service
public class FacturaService {
    
    @Autowired
    private CiudadanoRepository ciudadanoRepository;

    @Autowired
    private PoliciaRepository policiaRepository;

    @Autowired
    private DelitoRepository delitoRepository;

    @Autowired
    private MultaRepository multaRepository;


    public Factura generarFactura(String cedulaInfractor){
        Ciudadano ciudadano = this.ciudadanoRepository.findByCedulaInfractor(cedulaInfractor);
        Multa multa = this.multaRepository.findByCedulaInfractor(cedulaInfractor);
        Delito delito = this.delitoRepository.findByCedulaInfractor(cedulaInfractor);
        Policia policia = this.policiaRepository.findByPlacaPolicia(multa.getPlacaPolicia());

        return new Factura(ciudadano, policia, multa, delito);
    }
}
