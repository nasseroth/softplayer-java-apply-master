package br.com.softplan.api.softplayer.usuarios.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.softplan.api.softplayer.jwtauth.model.Role;
import br.com.softplan.api.softplayer.jwtauth.model.RoleName;
import br.com.softplan.api.softplayer.jwtauth.model.User;
import br.com.softplan.api.softplayer.jwtauth.repository.RoleRepository;
import br.com.softplan.api.softplayer.jwtauth.repository.UserRepository;

@Service
public class UsuarioService {

	@Autowired
	UserRepository usuarioRepository;
	
	@Autowired
	RoleRepository roleRepository;
	
	public List<User> listaUsuarios() {
		List<User> listFiltro = new ArrayList<User>();
		List<User> listPrincipal = usuarioRepository.findAll();
		for(User x : listPrincipal) {
			for(Role r : x.getRoles()) {
				if(r.getName() == RoleName.ROLE_ADMIN) {
					listFiltro.add(x);
				}
			}
		}
		return listFiltro;
	}
	
	public List<User> listaUsuariosSemAdm() {
		List<User> list2 = usuarioRepository.findAll();
		List<User> listPrincipal = usuarioRepository.findAll();
		for(User x : listPrincipal) {
			for(Role r : x.getRoles()) {
				if(r.getName() == RoleName.ROLE_ADMIN) {
					list2.remove(x);
				}
			}
		}
		return list2;
	}
	
	public User tonarAdministrador(Long id) {
		User user = usuarioRepository.findByIdUser(id);
		Role e = new Role();
		e = roleRepository.findByIdRole((long) 2);
		user.getRoles().add(e);
		return usuarioRepository.save(user);
	}
	
	public User removerAdministrador(Long id) {
		User user = usuarioRepository.findByIdUser(id);
		Role e = new Role();
		e = roleRepository.findByIdRole((long) 2);
		user.getRoles().remove(e);
		return usuarioRepository.save(user);
	}
	
}
