package br.com.softplan.api.softplayer.jwtauth.message.request;

import java.util.Date;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotEmpty;

import org.hibernate.validator.constraints.Length;
import org.hibernate.validator.constraints.br.CPF;

import br.com.softplan.api.softplayer.jwtauth.enums.SexoEnum;
import br.com.softplan.api.softplayer.util.DateUtil;
import lombok.Getter;
@Getter
public class SignUpForm {

	@NotEmpty(message = "Preenchimento obrigatório")
	@Length(min = 5, max = 40, message = "O tamanho deve ser entre 5 e 40 caracteres")
    private String username;
    
    private SexoEnum sexo;

    @Length(min = 5, max = 40, message = "O tamanho deve ser entre 5 e 40 caracteres")
    @Email
    private String email;
    
    @NotEmpty(message = "Preenchimento obrigatório")
    private String dataNascimento;
    
    private String naturalidade;
    
    private String nacionalidade;

    @NotEmpty(message = "Preenchimento obrigatório")
    @Length(min = 4, max = 20, message = "O tamanho deve ser entre 4 e 20 caracteres")
    private String password;
    
    @CPF(message = "CPF inválido")
    private String cpf;
    
    private String dataCadastro = new DateUtil().getDataHoraAtual();
    
    private Date dataAtualizacao;
 
}