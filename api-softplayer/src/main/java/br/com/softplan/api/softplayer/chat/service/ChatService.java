package br.com.softplan.api.softplayer.chat.service;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import br.com.softplan.api.softplayer.chat.model.ChatInterno;
import br.com.softplan.api.softplayer.chat.repository.ChatRepository;
import br.com.softplan.api.softplayer.jwtauth.repository.UserRepository;
import br.com.softplan.api.softplayer.usuarios.service.UsuarioService;
import br.com.softplan.api.softplayer.util.DateUtil;

@Service
public class ChatService {
	
	@Autowired
	private ChatRepository chatRepository;

	@Autowired
	private UsuarioService usuarioService;
	
	public ChatInterno enviarMsg(ChatInterno chat) {
		if(chat.getIdUsuarioRementente().equals(chat.getIdUsuarioDestinatario())
				|| !usuarioService.usuarioExiste(chat.getIdUsuarioDestinatario())
				|| !usuarioService.usuarioExiste(chat.getIdUsuarioRementente())) {
			return null;
		}
		chat.setDataEnvio(new DateUtil().getDataHoraAtual());
		return chatRepository.save(chat);
	}

	public List<ChatInterno> msgEnviadas(Long idRemetente, Long idDestinatario) {
		return chatRepository.obterMensagens(idRemetente, idDestinatario);
	}
}
