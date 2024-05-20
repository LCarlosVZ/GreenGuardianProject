package com.greenguardian.greenguardianproject.models;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table
public class Ciudadano {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String nombreInfractor;
    private String tipoIdentificacion;
    private String cedulaInfractor;
    private String ciudadExpedicion;
    private String departamentoResidencia;
    private String municipioResidencia;
    private String direccionResidencia;
    private String numeroTelefono;
    private String correoElectronico;

    // Constructor vacío
    public Ciudadano() {
    }

    // Constructor con parámetros
    public Ciudadano(Long id, String nombreInfractor, String tipoIdentificacion, String cedulaInfractor, String ciudadExpedicion, String departamentoResidencia, String municipioResidencia, String direccionResidencia, String numeroTelefono, String correoElectronico) {
        this.id = id;
        this.nombreInfractor = nombreInfractor;
        this.tipoIdentificacion = tipoIdentificacion;
        this.cedulaInfractor = cedulaInfractor;
        this.ciudadExpedicion = ciudadExpedicion;
        this.departamentoResidencia = departamentoResidencia;
        this.municipioResidencia = municipioResidencia;
        this.direccionResidencia = direccionResidencia;
        this.numeroTelefono = numeroTelefono;
        this.correoElectronico = correoElectronico;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNombreInfractor() {
        return nombreInfractor;
    }

    public void setNombreInfractor(String nombreInfractor) {
        this.nombreInfractor = nombreInfractor;
    }

    public String getTipoIdentificacion() {
        return tipoIdentificacion;
    }

    public void setTipoIdentificacion(String tipoIdentificacion) {
        this.tipoIdentificacion = tipoIdentificacion;
    }

    public String getCedulaInfractor() {
        return cedulaInfractor;
    }

    public void setCedulaInfractor(String cedulaInfractor) {
        this.cedulaInfractor = cedulaInfractor;
    }

    public String getCiudadExpedicion() {
        return ciudadExpedicion;
    }

    public void setCiudadExpedicion(String ciudadExpedicion) {
        this.ciudadExpedicion = ciudadExpedicion;
    }

    public String getDepartamentoResidencia() {
        return departamentoResidencia;
    }

    public void setDepartamentoResidencia(String departamentoResidencia) {
        this.departamentoResidencia = departamentoResidencia;
    }

    public String getMunicipioResidencia() {
        return municipioResidencia;
    }

    public void setMunicipioResidencia(String municipioResidencia) {
        this.municipioResidencia = municipioResidencia;
    }

    public String getDireccionResidencia() {
        return direccionResidencia;
    }

    public void setDireccionResidencia(String direccionResidencia) {
        this.direccionResidencia = direccionResidencia;
    }

    public String getNumeroTelefono() {
        return numeroTelefono;
    }

    public void setNumeroTelefono(String numeroTelefono) {
        this.numeroTelefono = numeroTelefono;
    }

    public String getCorreoElectronico() {
        return correoElectronico;
    }

    public void setCorreoElectronico(String correoElectronico) {
        this.correoElectronico = correoElectronico;
    }
}