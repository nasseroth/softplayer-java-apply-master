package br.com.softplan.api.softplayer.jwtauth.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import br.com.softplan.api.softplayer.jwtauth.model.Role;
import br.com.softplan.api.softplayer.jwtauth.model.RoleName;

@Repository
public interface RoleRepository extends JpaRepository<Role, Long> {
    Optional<Role> findByName(RoleName roleName);
    
    @Query("select r from Role r where r.id = ?1")
    Role findByIdRole(Long id);
    
}