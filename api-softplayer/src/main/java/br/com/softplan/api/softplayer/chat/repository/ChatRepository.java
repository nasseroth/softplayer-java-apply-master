package br.com.softplan.api.softplayer.chat.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import br.com.softplan.api.softplayer.chat.model.ChatInterno;
@Repository
public interface ChatRepository extends JpaRepository<ChatInterno, Long>{

	@Query("SELECT c FROM ChatInterno c WHERE "
			+ " c.idUsuarioRementente = :remeID AND c.idUsuarioDestinatario = :destID "
			+ " OR c.idUsuarioDestinatario = :remeID AND c.idUsuarioRementente = :destID "
			+ " ORDER BY c.dataEnvio")
	public List<ChatInterno> obterMensagens(@Param("remeID") Long idRemetente, @Param("destID") Long idDestinatario);
	/*
	@Query("SELECT c FROM ChatInterno c WHERE c.idUsuarioDestinatario = :destID AND c.idUsuarioRementente = :remeID ORDER BY c.dataEnvio")
	public List<ChatInterno> obterMensagens(@Param("remeID") Long remetente, @Param("destID") Long destinatario);*/


	@Query("SELECT c FROM ChatInterno c WHERE c.idUsuarioRementente = :remeID OR c.idUsuarioDestinatario = :remeID ORDER BY c.dataEnvio")
	public List<ChatInterno> todasMsg(@Param("remeID") Long idRemetente);
}
