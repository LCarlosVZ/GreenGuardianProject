package com.greenguardian.greenguardianproject.models;


import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table
public class Delito {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String nombreDelito;
    private String leyInfringida;
    private String valorMulta;
    private String descripcionInfraccion;
    private String cedulaInfractor;

    // Constructor vacío
    public Delito() {}

    // Constructor con parámetros
    public Delito(String nombreDelito, String leyInfringida, String valorMulta, String descripcionInfraccion, String cedulaInfractor ) {
        this.nombreDelito = nombreDelito;
        this.leyInfringida = leyInfringida;
        this.valorMulta = valorMulta;
        this.descripcionInfraccion = descripcionInfraccion;
        this.cedulaInfractor = cedulaInfractor;
    }

    public String getCedulaInfractor() {
        return this.cedulaInfractor;
    }

    public void setCedulaInfractor(String cedulaInfractor) {
        this.cedulaInfractor = cedulaInfractor;
    }
    
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNombreDelito() {
        return nombreDelito;
    }

    public void setNombreDelito(String nombreDelito) {
        this.nombreDelito = nombreDelito;
    }

    public String getLeyInfringida() {
        return leyInfringida;
    }

    public void setLeyInfringida(String leyInfringida) {
        this.leyInfringida = leyInfringida;
    }

    public String getValorMulta() {
        return valorMulta;
    }

    public void setValorMulta(String valorMulta) {
        this.valorMulta = valorMulta;
    }

    public String getDescripcionInfraccion() {
        return descripcionInfraccion;
    }

    public void setDescripcionInfraccion(String descripcionInfraccion) {
        this.descripcionInfraccion = descripcionInfraccion;
    }
}