package br.com.softplan.api.softplayer.jwtauth.message.response;

public class JwtResponse {
    private String token;
    private Long id;
    private String type = "Bearer";

    public Long getId() {
		return id;
	}
    
	public JwtResponse(String accessToken, Long id) {
        this.token = accessToken;
        this.id = id;
    }

    public String getAccessToken() {
        return token;
    }

    public void setAccessToken(String accessToken) {
        this.token = accessToken;
    }

    public String getTokenType() {
        return type;
    }

    public void setTokenType(String tokenType) {
        this.type = tokenType;
    }
}