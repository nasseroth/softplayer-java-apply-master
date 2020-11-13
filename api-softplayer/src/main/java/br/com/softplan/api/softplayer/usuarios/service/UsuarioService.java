 package br.com.softplan.api.softplayer.usuarios.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.softplan.api.softplayer.jwtauth.model.Role;
import br.com.softplan.api.softplayer.jwtauth.model.RoleName;
import br.com.softplan.api.softplayer.jwtauth.model.User;
import br.com.softplan.api.softplayer.jwtauth.repository.UserRepository;

@Service
public class UsuarioService {

	@Autowired
	private UserRepository usuarioRepository;
	
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

	public void deletar(Long id) {
		usuarioRepository.deleteById(id);
	}
	
	public Boolean usuarioExiste(Long id) {
		usuarioRepository.usuarioExiste(id);
		if(id != null) {
			return true;
		}
		return false;
	}
	
	public String buscaUsernamePorId(Long id) {
		return usuarioRepository.findUsernameById(id);
	}
	
	public Long buscaIdPorUsername(String username) {
		return usuarioRepository.findIdByUsername(username);
	}
}
