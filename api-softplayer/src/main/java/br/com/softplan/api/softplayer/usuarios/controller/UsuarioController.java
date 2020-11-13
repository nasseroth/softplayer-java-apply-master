package br.com.softplan.api.softplayer.usuarios.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import br.com.softplan.api.softplayer.jwtauth.model.User;
import br.com.softplan.api.softplayer.usuarios.service.UsuarioService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;

@RestController
@RequestMapping(value="/api/ti/usuario/administrador")
@Api(value = "API REST Usuarios")
@CrossOrigin(origins = "*")
public class UsuarioController {

	@Autowired
	UsuarioService usuarioService;
	
	@PreAuthorize("hasRole('ROLE_ADMIN')")
	@GetMapping
	@ApiOperation(value = "Retorna uma lista de pessoas")
	public List<User> listAll() {
		return usuarioService.listaUsuarios();
	}
	

	@PreAuthorize("hasRole('ROLE_ADMIN')")
	@RequestMapping(value = "/excluir/{id}", method = RequestMethod.DELETE)
	@ApiOperation(value = "Deletar usuario por ID")
	public ResponseEntity<Void> deletarUsuarioPorId(@PathVariable Long id) {
		usuarioService.deletar(id);
		return ResponseEntity.noContent().build();
	}
}