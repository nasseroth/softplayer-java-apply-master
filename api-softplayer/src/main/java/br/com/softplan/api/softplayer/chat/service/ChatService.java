package br.com.softplan.api.softplayer.chat.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.softplan.api.softplayer.chat.model.ChatInterno;
import br.com.softplan.api.softplayer.chat.repository.ChatRepository;
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
				|| chat.getIdUsuarioDestinatario().equals(null)
				|| chat.getIdUsuarioRementente().equals(null)) {
			return null;
		}
		chat.setUsernameRemetente(usuarioService.buscaUsernamePorId(chat.getIdUsuarioRementente()));
		chat.setUsernameDestinatario(usuarioService.buscaUsernamePorId(chat.getIdUsuarioDestinatario()));
		chat.setDataEnvio(new DateUtil().getDataHoraAtual());
		return chatRepository.save(chat);
	}

	public List<ChatInterno> msgEnviadas(Long idRemetente, Long idDestinatario) {
		return chatRepository.obterMensagens(idRemetente, idDestinatario);
	}
	
	public List<ChatInterno> todasMsg(Long idRemetente) {
		return chatRepository.todasMsg(idRemetente);
	}
}
