package com.greenguardian.greenguardianproject.controllers;

import com.greenguardian.greenguardianproject.dto.Factura;
import com.greenguardian.greenguardianproject.models.Ciudadano;
import com.greenguardian.greenguardianproject.models.Policia;
import com.greenguardian.greenguardianproject.repositories.CiudadanoRepository;
import com.greenguardian.greenguardianproject.repositories.PoliciaRepository;
import com.greenguardian.greenguardianproject.service.FacturaService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;

import com.greenguardian.greenguardianproject.models.Delito;
import com.greenguardian.greenguardianproject.repositories.DelitoRepository;
import com.greenguardian.greenguardianproject.repositories.MultaRepository;
import com.greenguardian.greenguardianproject.models.Multa;
import org.springframework.web.bind.annotation.*;



@Controller()
@CrossOrigin("*")
public class PageController {

    @Autowired
    private CiudadanoRepository ciudadanoRepository;

    @Autowired
    private PoliciaRepository policiaRepository;

    @Autowired
    private DelitoRepository delitoRepository;

    @Autowired
    private MultaRepository multaRepository;

    @Autowired
    private FacturaService facturaService;

  

    @GetMapping("/api")
    public String index() {
        return "index";
    }

    @GetMapping("api/ciudadano")
    public String ciudadanoForm(Model model) {
        model.addAttribute("ciudadano", new Ciudadano());
        return "ciudadano";
    }

    @PostMapping("api/ciudadano")
    public String ciudadanoSubmit(@RequestBody Ciudadano ciudadano) {
        ciudadanoRepository.save(ciudadano);
        return "redirect:/";
    }

    @GetMapping("api/policia")
    public String policiaForm(Model model) {
        model.addAttribute("policia", new Policia());
        return "policia";
    }

    @PostMapping("api/policia")
    public String policiaSubmit(@RequestBody Policia policia) {
        policiaRepository.save(policia);
        return "redirect:/";
    }

    @GetMapping("api/delito")
    public String delitoForm(Model model) {
        model.addAttribute("delito", new Delito());
        return "delito";
    }

    @PostMapping("api/delito")
    public String delitoSubmit(@RequestBody Delito delito) {
        delitoRepository.save(delito);
        return "redirect:/";
    }

    @GetMapping("api/factura")
    public String factura() {
        return "factura";
    }

    @GetMapping("api/formulario")
    public String formulario() {
        return "formulario";
    }

    @GetMapping("api/infractor")
    public String infractor() {
        return "infractor";
    }

    @GetMapping("api/log")
    public String log() {
        return "log";
    }

    @GetMapping("api/log_policia")
    public String log_policia() {
        return "log_policia";
    }

    @GetMapping("api/multa")
    public String multa() {
        return "multa";
    }

    @PostMapping("api/multa")
    public String multaSubmit(@RequestBody Multa multa) {
        multaRepository.save(multa);
        return "redirect:/";
    }


    @GetMapping("api/infractor/{cedulaInfractor}")
    public ResponseEntity<Factura> getInfractorByCedula(@PathVariable String cedulaInfractor) {
        return ResponseEntity.ok().body(this.facturaService.generarFactura(cedulaInfractor));
    }
    
}
