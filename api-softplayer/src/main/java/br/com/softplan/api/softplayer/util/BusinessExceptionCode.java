package br.com.softplan.api.softplayer.util;

public enum BusinessExceptionCode {

	ERR001("CREDENCIAIS NÃO CONFEREM ERR_504_777"),
	ERR004("ERR_404_100"),
	ERR005("ERRO NÃO IDENTIFICADO ERR_122_098");
	
	private final String message;

	private BusinessExceptionCode(final String message) {
		this.message = message;
	}

	public String getMessage() {
		return message;
	}

}
