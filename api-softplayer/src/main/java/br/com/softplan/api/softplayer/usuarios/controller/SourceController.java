package br.com.softplan.api.softplayer.usuarios.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
@RestController
@RequestMapping(value="/source")
public class SourceController {
	
	@GetMapping
	public String sourceReturn() {
		return "https://github.com/nasseroth/softplayer-java-apply-master";
	}
}
