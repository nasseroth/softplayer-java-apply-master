package br.com.softplan.api.softplayer.jwtauth.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import br.com.softplan.api.softplayer.jwtauth.model.User;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    Optional<User> findByUsername(String username);
    Boolean existsByUsername(String username);
    Boolean existsByCpf(String CPF);
    Boolean existsByEmail(String email);
    @Query("select u from User u where u.username = ?1")
	User findByName(String jwtUser);
    @Query("select u from User u where u.id = ?1")
	User findByIdUser(Long id);
}