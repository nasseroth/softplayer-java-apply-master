package br.com.softplan.api.softplayer.jwtauth.enums;
import lombok.Getter;

@Getter
public enum SexoEnum {

	MASCULINO(1, "MASCULINO"), FEMININO(2, "FEMININO"), NAO_INFORMADO(3, "NÃO INFORMADO");

	private Integer cod;
	private String descricao;

	private SexoEnum(Integer cod, String descricao) {
		this.cod = cod;
		this.descricao = descricao;
	}

	public static SexoEnum toEnum(Integer cod) {
		if (cod == null) {
			return null;
		}

		for (SexoEnum tipoCliente : SexoEnum.values()) {
			if (cod.equals(tipoCliente.getCod())) {
				return tipoCliente;
			}
		}

		throw new IllegalArgumentException("ID do tipo cliente inválido: " + cod);
	}
}
