package br.com.softplan.api.softplayer.jwtauth.repository;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import br.com.softplan.api.softplayer.jwtauth.model.User;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    Optional<User> findByUsername(String username);
    Boolean existsByUsername(String username);
    Boolean existsByCpf(String CPF);
    @Query("select u from User u where u.username = ?1")
	User findByName(String jwtUser);
    @Query("select u from User u where u.id = ?1")
	User findByIdUser(Long id);
    
    @Query("select u.username from User u where u.id = ?1")
	String findUsernameById(Long id);
    
    @Query("select u.id from User u where u.username = ?1")
	Long findIdByUsername(String username);
    
	@Query("SELECT u FROM User u WHERE u.id = :ID")
	public User usuarioExiste(@Param("ID") Long id);
}