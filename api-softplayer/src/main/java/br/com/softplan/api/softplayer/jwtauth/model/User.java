package br.com.softplan.api.softplayer.jwtauth.model;
import java.util.HashSet;
import java.util.Set;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.Table;
import javax.persistence.UniqueConstraint;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotEmpty;

import org.hibernate.validator.constraints.Length;
import org.hibernate.validator.constraints.br.CPF;

import br.com.softplan.api.softplayer.jwtauth.enums.SexoEnum;
import br.com.softplan.api.softplayer.util.DateUtil;
import lombok.Getter;
import lombok.NoArgsConstructor;
@Getter
@Entity
@NoArgsConstructor
@Table(name = "USERS", uniqueConstraints = {
        @UniqueConstraint(columnNames = {
            "username"
        }),
        @UniqueConstraint(columnNames = {
            "cpf"
        })
})
public class User{
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

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
    @Length(min = 4, max = 80, message = "O tamanho deve ser entre 4 e 20 caracteres")
    private String password;
    
    @CPF(message = "CPF inválido")
    private String cpf;
    
    private String dataCadastro = new DateUtil().getDataHoraAtual();
    
    private String dataAtualizacao;
 
	@ManyToMany(fetch = FetchType.LAZY)
    @JoinTable(name = "user_roles", 
    	joinColumns = @JoinColumn(name = "user_id"), 
    	inverseJoinColumns = @JoinColumn(name = "role_id"))
    private Set<Role> roles = new HashSet<>();

	public User(String username,
			SexoEnum sexo,
			String email,
			String dataNascimento, 
			String naturalidade,
			String nacionalidade,
			String password,
			String cpf, 
			String dataCadastro, String dataAtualizacao) {
		this.username = username;
		this.sexo = sexo;
		this.email = email;
		this.dataNascimento = dataNascimento;
		this.naturalidade = naturalidade;
		this.nacionalidade = nacionalidade;
		this.password = password;
		this.cpf = cpf;
		this.dataCadastro = dataCadastro;
		this.dataAtualizacao = new DateUtil().getDataHoraAtual();
	};

	public void setRoles(Set<Role> roles) {
		this.roles = roles;
	};

	public void setPassword(String password) {
		this.password = password;
	}

	public void setDataAtualizacao(String dataAtualizacao) {
		this.dataAtualizacao = dataAtualizacao;
	};
	
}

