package br.com.softplan.api.softplayer.usuarios.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.softplan.api.softplayer.jwtauth.model.User;
import br.com.softplan.api.softplayer.usuarios.service.UsuarioService;

@RestController
@RequestMapping(value="/api/ti/usuario/administrador")
public class UsuarioController {

	@Autowired
	UsuarioService usuarioService;
	
	@PreAuthorize("hasRole('ROLE_ADMIN')")
	@GetMapping
	public List<User> listAll() {
		return usuarioService.listaUsuarios();
	}
	
}