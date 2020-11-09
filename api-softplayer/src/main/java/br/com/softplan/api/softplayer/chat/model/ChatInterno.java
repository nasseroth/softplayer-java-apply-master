package br.com.softplan.api.softplayer.chat.model;

import java.util.Date;
import java.util.Set;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.UniqueConstraint;
import javax.validation.constraints.NotEmpty;

import org.hibernate.validator.constraints.Length;

import com.sun.istack.NotNull;

import br.com.softplan.api.softplayer.jwtauth.enums.SexoEnum;
import br.com.softplan.api.softplayer.jwtauth.model.Role;
import br.com.softplan.api.softplayer.util.DateUtil;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
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
	private Long idUsuarioDestinatario;
	
	private String dataEnvio;
	
	@NotEmpty(message = "Preenchimento obrigatório")
	@Length(min = 3, max = 500, message = "A mensagem deve conter de 3 a 500 caracteres")
	private String mensagem;

	public ChatInterno(Long idUsuarioRementente, Long idUsuarioDestinatario, String dataEnvio, String mensagem) {
		this.idUsuarioRementente = idUsuarioRementente;
		this.idUsuarioDestinatario = idUsuarioDestinatario;
		this.dataEnvio = dataEnvio;
		this.mensagem = mensagem;
	}

	public void setDataEnvio(String string) {
		this.dataEnvio = string;
	}
}
