package br.com.softplan.api.softplayer.chat.controller;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import br.com.softplan.api.softplayer.chat.model.ChatInterno;
import br.com.softplan.api.softplayer.chat.service.ChatService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;

@RestController
@RequestMapping(value="/api/ti/chat")
@Api(value = "API REST Chat")
@CrossOrigin(origins = "*")
public class ChatController {

	@Autowired
	private ChatService chatService;
	
	@PreAuthorize("hasAnyRole('ADMIN')")
    @PostMapping(value="/enviar-mensagem")
	@ApiOperation(value = "Faz o envio de uma mensagem")
    public ResponseEntity<ChatInterno> enviarMensagem(@Valid @RequestBody ChatInterno chat) {
		return ResponseEntity.ok().body(chatService.enviarMsg(chat));
    }
	
	@PreAuthorize("hasAnyRole('ADMIN')")
	@RequestMapping(value = "/receber-mensagem/{idRemetente}/{idDestinatario}", method = RequestMethod.GET)
	@ApiOperation(value = "Retorna as mensagens entre o remetente e destinatario")
    public List<ChatInterno> receberMensagem(@PathVariable("idRemetente") Long idRemetente,@PathVariable("idDestinatario") Long idDestinatario) {
		return chatService.msgEnviadas(idRemetente, idDestinatario);
    }
}
