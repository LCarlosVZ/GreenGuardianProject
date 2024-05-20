package com.greenguardian.greenguardianproject.dto;

import com.greenguardian.greenguardianproject.models.Ciudadano;
import com.greenguardian.greenguardianproject.models.Delito;
import com.greenguardian.greenguardianproject.models.Multa;
import com.greenguardian.greenguardianproject.models.Policia;

public record Factura(
    Ciudadano ciudadano,
    Policia policia,
    Multa multa,
    Delito delito
) {

}
