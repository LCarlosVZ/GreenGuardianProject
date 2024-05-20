package com.greenguardian.greenguardianproject.models;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.persistence.Column;
import java.time.LocalDate;

@Entity
@Table
public class Multa {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(nullable = false)
    private LocalDate fechaMulta;
    private String cedulaInfractor;
    private String placaPolicia;
    private String valorMulta;

    public Multa() {
    }

    public Multa(Long id, LocalDate fechaMulta, String cedulaInfractor, String placaPolicia, String valorMulta) {
        this.id = id;
        this.fechaMulta = fechaMulta;
        this.cedulaInfractor = cedulaInfractor;
        this.placaPolicia = placaPolicia;
        this.valorMulta = valorMulta;
    }

    public String getCedulaInfractor(){
        return this.cedulaInfractor;
    }

    public void setCedulaInfractor(String cedulaInfractor){
        this.cedulaInfractor = cedulaInfractor;
    }

    public String getPlacaPolicia(){
        return this.placaPolicia;
    }

    public void setPlacaPolicia(String placaPolicia){
        this.placaPolicia = placaPolicia ;
    }

    public String getValorMulta(){
        return this.valorMulta;
    }
    
    public void setValorMulta(String valorMulta){
        this.valorMulta = valorMulta;
    }

    // getters and setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public LocalDate getFechaMulta() {
        return fechaMulta;
    }

    public void setFechaMulta(LocalDate fechaMulta) {
        this.fechaMulta = fechaMulta;
    }
}

