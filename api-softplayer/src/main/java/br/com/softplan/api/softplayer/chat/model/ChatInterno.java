package br.com.softplan.api.softplayer.chat.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotEmpty;

import org.hibernate.validator.constraints.Length;

import com.sun.istack.NotNull;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@Entity
@NoArgsConstructor
@Table(name = "chat")
public class ChatInterno {
	
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
	
	@NotNull
	private Long idUsuarioRementente;
	
	@NotNull
	private String usernameRemetente;
	
	@NotNull
	private Long idUsuarioDestinatario;
	
	@NotNull
	private String usernameDestinatario;
	
	@NotNull
	private String dataEnvio;
	
	@NotEmpty(message = "Preenchimento obrigatório")
	@Length(min = 3, max = 500, message = "A mensagem deve conter de 3 a 500 caracteres")
	private String mensagem;
	
	public ChatInterno(Long idUsuarioRementente,
			String usernameRemetente, 
			Long idUsuarioDestinatario,
			String usernameDestinatario, 
			String dataEnvio,
			String mensagem) {
		this.idUsuarioRementente = idUsuarioRementente;
		this.usernameRemetente = usernameRemetente;
		this.idUsuarioDestinatario = idUsuarioDestinatario;
		this.usernameDestinatario = usernameDestinatario;
		this.dataEnvio = dataEnvio;
		this.mensagem = mensagem;
	}

}
