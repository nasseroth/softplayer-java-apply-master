package br.com.softplan.api.softplayer.usuarios.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
@RestController
@RequestMapping(value="/source")
@Api(value = "API REST Source")
@CrossOrigin(origins = "*")
public class SourceController {
	
	@GetMapping
	@ApiOperation(value = "Retorna o URL do código fonte do projeto")
	public String sourceReturn() {
		return "https://github.com/nasseroth/softplayer-java-apply-master";
	}
}
