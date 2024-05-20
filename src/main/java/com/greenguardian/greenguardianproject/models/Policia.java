package com.greenguardian.greenguardianproject.models;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table
public class Policia {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String nombrePolicia;
    private String placaPolicia;
    private String cuadrante;
    private String numeroTelefono;

    // Constructor vacío
    public Policia() {
    }

    // Constructor con parámetros
    public Policia(Long id, String nombrePolicia, String placaPolicia, String cuadrante, String numeroTelefono) {
        this.id = id;
        this.nombrePolicia = nombrePolicia;
        this.placaPolicia = placaPolicia;
        this.cuadrante = cuadrante;
        this.numeroTelefono = numeroTelefono;
    }


    // Getters y Setters

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNombrePolicia() {
        return nombrePolicia;
    }

    public void setNombrePolicia(String nombrePolicia) {
        this.nombrePolicia = nombrePolicia;
    }

    public String getPlacaPolicia() {
        return placaPolicia;
    }

    public void setPlacaPolicia(String placaPolicia) {
        this.placaPolicia = placaPolicia;
    }

    public String getCuadrante() {
        return cuadrante;
    }

    public void setCuadrante(String cuadrante) {
        this.cuadrante = cuadrante;
    }

    public String getNumeroTelefono() {
        return numeroTelefono;
    }

    public void setNumeroTelefono(String numeroTelefono) {
        this.numeroTelefono = numeroTelefono;
    }
}
